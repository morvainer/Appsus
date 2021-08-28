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
const gLoggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Appsus'
}
let date1 = new Date((new Date()).valueOf() + 1 * 3600 * 24).toISOString().split('T')[0].split('-').reverse().join('-')
let date2 = new Date((new Date()).valueOf() + 2000 * 3600 * 24).toISOString().split('T')[0].split('-').reverse().join('-')
let date3 = new Date((new Date()).valueOf() + 1000 * 3600 * 24).toISOString().split('T')[0].split('-').reverse().join('-')

let gEmails = storageService.loadFromStorage(KEY) || [
    {
        id: utilService.makeId(),
        toEmail: gLoggedinUser.email,
        fromName: 'Amazon',
        fromEmail: 'Amazon@amazon.com',
        subject: 'Welcome',
        message: 'Dear Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date1,
        status: 'inbox'
    },
    {
        id: utilService.makeId(),
        toEmail: gLoggedinUser.email,
        fromName: 'Apple',
        fromEmail: 'apple@apple.com',
        subject: 'Hi Customer',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date2,
        status: 'inbox'
    },
    {
        id: utilService.makeId(),
        toEmail: gLoggedinUser.email,
        fromName: 'Netflix',
        fromEmail: 'netflix@netflix.com',
        subject: 'Hello',
        message: 'Dear Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date1,
        status: 'inbox'
    },
    {
        id: utilService.makeId(),
        toEmail: gLoggedinUser.email,
        fromName: 'YouTube',
        fromEmail: 'youtube@youtube.com',
        subject: 'Hi',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date3,
        status: 'inbox'
    },
    {
        id: utilService.makeId(),
        toEmail: gLoggedinUser.email,
        fromName: 'Facebook',
        fromEmail: 'facebook@facebook.com',
        subject: 'Congrats!',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date2,
        status: 'inbox'
    },
    {
        id: utilService.makeId(),
        toEmail: 'Muki',
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject: 'Hi',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date3,
        status: 'sent'
    },
    {
        id: utilService.makeId(),
        toEmail: 'Shuki',
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject: 'Hello',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date1,
        status: 'sent'
    },
    {
        id: utilService.makeId(),
        toEmail: 'Apple',
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject: 'Congrats',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date2,
        status: 'sent'
    },
    {
        id: utilService.makeId(),
        toEmail: 'YouTube',
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject: 'Hi',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date3,
        status: 'sent'
    },
    {
        id: utilService.makeId(),
        toEmail: 'Facbook',
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject: 'Hello',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        isRead: false,
        sentAt: date1,
        status: 'sent'
    }
]
let gReadMailsCount = 0


function getEmailById(emailId) {
    let email = gEmails.find(function (email) {
        return emailId === email.id
    })
    return Promise.resolve(email)
}




function query(sortBy, filterBy, folderForFilter) {
    if (filterBy || sortBy || folderForFilter) {
        let { search, emailsReadFilter } = filterBy
        let { sortEmails } = sortBy
        let emailsToShow = null;
        let sortedEmails = null;
        let filteredFolders = null;
        emailsReadFilter = emailsReadFilter ? emailsReadFilter : 'all'
        search = search ? search : ''
        sortEmails = sortEmails ? sortEmails : ''
        if (sortEmails === 'date') {
            sortedEmails = sortEmailsByDate(gEmails)
        } else if (sortEmails === 'subject') {
            sortedEmails = sortEmailsBySubject(gEmails)
        }

        filteredFolders = sortedEmails

        if (folderForFilter) {
            if (folderForFilter === 'sent') {
                filteredFolders = gEmails.filter(email => {
                    return (email.status === 'sent')
                })
            } else if (folderForFilter === 'inbox') {
                filteredFolders = gEmails.filter(email => {
                    return (email.status === 'inbox')
                })

            }
        }
        emailsToShow = filteredFolders
        if (!filterBy) {
            return Promise.resolve(emailsToShow)
        } else {
            if (search) {
                emailsToShow = filteredFolders.filter(email => email.subject.toLowerCase().includes(search.toLowerCase()))
            }
            if (emailsReadFilter === 'read') {
                emailsToShow = filteredFolders.filter(email => {
                    return (email.isRead) && (email.subject.toLowerCase().includes(search.toLowerCase()))
                })
            }
            else if (emailsReadFilter === 'unRead') {
                emailsToShow = filteredFolders.filter(email => {
                    return (!email.isRead) && email.subject.toLowerCase().includes(search.toLowerCase())
                })
            }
            else if (emailsReadFilter === 'all') {
                emailsToShow = filteredFolders.filter(email => {
                    return (email) && email.subject.toLowerCase().includes(search.toLowerCase())
                })
            }

            return Promise.resolve(emailsToShow)

        }
    }
    return Promise.resolve(gEmails);
}


function sortEmailsByDate(emails) {
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


function updateEmailIsRead(emailId) {//change
    getEmailById(emailId).then((email) => {
        email.isRead = true
        _saveEmailsToStorage();
    })
    return Promise.resolve()

}
function deleteEmail(emailId) {
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
        if (!mail.isRead && (mail.status === 'inbox')) {
            gReadMailsCount++
        }
    })
    let count = gReadMailsCount
    return Promise.resolve(count)
}

function addEmail(to, subject, message) {
    _createEmail(to, subject, message);
    return Promise.resolve()
}

function _createEmail(toEmail, subject, message) {

    let date = new Date((new Date()).valueOf() + 1 * 3600 * 24).toISOString().split('T')[0].split('-').reverse().join('-')
    const email = {
        id: utilService.makeId(),
        toEmail,
        fromName: gLoggedinUser.fullname,
        fromEmail: gLoggedinUser.email,
        subject,
        message,
        isRead: false,
        sentAt: date,
        status: 'sent'
    }
    gEmails.push(email);
    storageService.saveToStorage('emailsDB', gEmails)
    return Promise.resolve();
}


function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
