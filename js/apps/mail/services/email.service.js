
export const emailService = {
    query,
    
}

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

const criteria = { status: 'inbox/sent/trash/draft', 
txt: 'puki', //no need to support complex text search 
isRead: true, // (optional property, if missing: show all) 
isStared: true, // (optional property, if missing: show all) 
lables: ['important', 'romantic'] // has any of the labels 
}


function query(filterBy) {
    if (filterBy) {
        let { name, minPrice, maxPrice } = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity
        minPrice = minPrice ? minPrice : 0
        const booksToShow = gBooks.filter(book => book.title.includes(name) &&
            book.listPrice.amount >= minPrice && book.listPrice.amount <= maxPrice)
        return Promise.resolve(booksToShow)
    }
    return Promise.resolve(gBooks);
}


function addEmail(){

}

function createEmail(){

}

function deleteEmail(){

}

function updateEmail(){

}


function _saveEmailToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
