import { storageService } from '../../../services-general/storage.service.js'
import { utilService } from '../../../services-general/util.service.js'
export const emailService = {
    query,
    addEmail,
    getEmailById,
    updateEmailIsRead

}
const KEY = 'emailsDB';
// let gEmails = [];
let gEmails = storageService.loadFromStorage(KEY) || []
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

function updateEmailIsRead(emailId){
    getEmailById(emailId).then((email)=>{
        email.isRead = true
        _saveEmailToStorage();
    })
 //change gEmail.isRead
 //save to storage
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
        sentAt: '3/3/3',
        status: 'sent',
        isStared: false

        
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

function deleteEmail() {

}

function updateEmail() {

}


function _saveEmailToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
