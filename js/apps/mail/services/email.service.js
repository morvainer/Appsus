import { storageService } from '../../../services-general/storage.service.js'
import { utilService } from '../../../services-general/util.service.js'
export const emailService = {
    query,
    addEmail,
    getEmailById,
    updateEmailIsRead,
    countUnreadMails,
    deleteEmail

}
const KEY = 'emailsDB';
// let gEmails = [];
let gEmails = storageService.loadFromStorage(KEY) || []
let gReadMailsCount = 0
// let gEmails=[
//     {id: 1, name: 'mor', title: 'this is a title'},
//     {id: 2, name: 'mor2', title: 'this is a title2'},
//     {id: 3, name: 'mor3', title: 'this is a title3'}
// ];

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const criteria = {// for search?-------------
    status: 'inbox/sent/trash/draft',
    txt: 'puki', //no need to support complex text search 
    isRead: true, // (optional property, if missing: show all) 
    isStared: true, // (optional property, if missing: show all) 
    lables: ['important', 'romantic'] // has any of the labels 
}


// function query(filterBy) {
//     if (filterBy) {
//         let { name, minPrice, maxPrice } = filterBy
//         maxPrice = maxPrice ? maxPrice : Infinity
//         minPrice = minPrice ? minPrice : 0
//         const booksToShow = gBooks.filter(book => book.title.includes(name) &&
//             book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
//         return Promise.resolve(booksToShow)
//     }
//     return Promise.resolve(gBooks);
// }
function getEmailById(emailId) {
    let email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email)
}

function query() {
    return Promise.resolve(gEmails);

}


function query( sortBy, filterBy) {//gets object //emailsReadFilter ='read'
    if (filterBy || sortBy) {
        
        console.log('query');
        console.log('filterby from service', filterBy);
        console.log('sortby from service', sortBy);
        let { search, emailsReadFilter } = filterBy
        let {  sortEmails } = sortBy
        let emailsToShow =null;
        let  sortedEmails=null;
        emailsReadFilter = emailsReadFilter ? emailsReadFilter : 'all'
        search = search? search : ''
        sortEmails= sortEmails?  sortEmails: ''
        // const emailsToShow = gEmails.filter(email => email.subject.includes(search)) 
        if(sortEmails === 'none'){
            sortedEmails = gEmails
            // _saveEmailsToStorage();
        }
        else if (sortEmails === 'date') {
            sortedEmails = sortEmailsByDate(gEmails) 
            console.log('gmails in sory by date is', gEmails);
            // _saveEmailsToStorage();
         }else if(sortEmails === 'subject'){
            sortedEmails = sortEmailsBySubject(gEmails) 
            console.log('gmails in sort by subject is', gEmails);
            // _saveEmailsToStorage();

         }
        //  gEmails=sortedEmails
        console.log(' sortedEmails',  sortedEmails);

        emailsToShow=sortedEmails //filter gets the sort so it executes it//
        //  you dont return anything in the in the sort like you do in the filter--------------look HERE!!!!
        // gEmails=sortedEmails
        console.log(' emailsToShow',  emailsToShow);
        if(!filterBy){
            return Promise.resolve(emailsToShow)
        }

        if(search){

            emailsToShow = gEmails.filter(email => email.subject.includes(search)) 
        }
         if(emailsReadFilter==='read'){
            emailsToShow = gEmails.filter(email => {
                 return (email.isRead) && (email.subject.includes(search))}) 
         }
         else if(emailsReadFilter=== 'unRead'){
            emailsToShow = gEmails.filter(email => {
                 return (!email.isRead) && email.subject.includes(search)}) 
         }  
         else if(emailsReadFilter==='all'){
            emailsToShow = gEmails.filter(email => {
                 return (email) && email.subject.includes(search)}) 
         }  
        
               
        
        return Promise.resolve(emailsToShow)
    }
    return Promise.resolve(gEmails);
}



function sortEmailsByDate(emails) {
console.log('sorting by date');

    return emails.sort(function (email1, email2) {
        if (email1.sentAt > email2.sentAt) {
            return 1;
        } if (email2.sentAt > email1.sentAt) {
            return -1;
        } else {
            return 0;
        }

    });
}

function sortEmailsBySubject(emails) {
    console.log('sorting by subject');
    
        return emails.sort(function (email1, email2) {
            if (email1.subject > email2.subject) {
                return 1;
            } if (email2.subject > email1.subject) {
                return -1;
            } else {
                return 0;
            }
    
        });
    }
    

// (emailsReadFilter==='read' && email.isRead)  || 
// (emailsReadFilter==='unRead' && !email.isRead)   






function updateEmailIsRead(emailId) {//change
    getEmailById(emailId).then((email) => {
        email.isRead = true

        // console.log('count:',gCount);
        _saveEmailsToStorage();
    })
    return Promise.resolve()
    //change gEmail.isRead
    //save to storage
}
function deleteEmail(emailId) {
    console.log('the email id in delete email is', emailId);
    // if (!emailId) return
    let emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();
    return Promise.resolve('resolves')
}
function countUnreadMails() {
    gReadMailsCount = 0;
    gEmails.forEach((mail) => {
        if (mail.isRead) {
            gReadMailsCount++
            // console.log('mail is:',mail);
        }
    })
    let count = gReadMailsCount
    return Promise.resolve(count)
}

function addEmail(to, cc, bcc, subject, message) {
    // let nameOfSender = prompt('enter name');
    // let nameOfTitle = prompt('enter title');
    _createEmail(to, cc, bcc, subject, message);
    console.log('gEmails', gEmails);
    // storageService.saveToStorage('emailsDB', gEmails)
}

function _createEmail(to, cc, bcc, subject, message) {

    const email = {
        id: utilService.makeId(),
        // id: 1,
        to,
        from: 'User',
        cc,
        bcc,
        subject,
        message,
        isRead: false,
        sentAt: new Date((new Date()).valueOf() + 1*3600*24).toISOString().split('T')[0].split('-').reverse().join('-'),
        status: 'sent',
        isStared: false
        // new Date((new Date()).valueOf() + 1*3600*24).toISOString().split('T')[0].split('-').reverse().join('-'),
        // new Date().toISOString().split('T')[0].split('-').reverse().join('-'),

        // content: utilService.makeLorem(),
    }
    // _saveBooksToStorage()
    gEmails.push(email);
    storageService.saveToStorage('emailsDB', gEmails)
    // console.log('gEmails', gEmails);
    // _saveEmailToStorage()
    // storageService.saveToStorage(KEY, gEmails)
    return Promise.resolve();
}






function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
