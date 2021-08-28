import { storageService } from './storage.service.js';

export const bookService = {
  query,
  getBookById,
  addReview,
  getReviews,
  deleteReview,
  getBooksFromApi,
  // getBooksFromApiSample,
  addBook,
  getNextBookId,
  getPreviousBookId,
  //   getVendors,
  //   addCar,
  //   deleteCar,
  //   updateCar,
};

const KEY = 'books';
var gBooks = storageService.loadFromStorage(KEY) || [
  {
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
    authors: ['Barbara Cartland'],
    publishedDate: 1999,
    description:
      'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
    pageCount: 713,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    language: 'en',
    listPrice: {
      amount: 109,
      currencyCode: 'EUR',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'JYOJa2NpSCq',
    title: 'morbi',
    subtitle: 'lorem euismod dictumst inceptos mi',
    authors: ['Barbara Cartland'],
    publishedDate: 1978,
    description:
      'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
    pageCount: 129,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'sp',
    listPrice: {
      amount: 44,
      currencyCode: 'EUR',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: '1y0Oqts35DQ',
    title: 'at viverra venenatis',
    subtitle: 'gravida libero facilisis rhoncus urna etiam',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
    pageCount: 972,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
    language: 'he',
    listPrice: {
      amount: 108,
      currencyCode: 'ILS',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'kSnfIJyikTP',
    title: 'dictum',
    subtitle:
      'augue eu consectetur class curabitur conubia ligula in ullamcorper',
    authors: ['Danielle Steel'],
    publishedDate: 1978,
    description:
      'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
    pageCount: 303,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
    language: 'en',
    listPrice: {
      amount: 30,
      currencyCode: 'EUR',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'f4iuVmbuKCC',
    title: 'sem himenaeos aptent',
    subtitle: 'interdum per habitasse luctus purus est',
    authors: ['Dr. Seuss'],
    publishedDate: 2011,
    description:
      'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
    pageCount: 337,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
    language: 'sp',
    listPrice: {
      amount: 19,
      currencyCode: 'USD',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'U2rfZO6oBZf',
    title: 'mi ante posuere',
    subtitle:
      'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
    authors: ['Leo Tolstoy'],
    publishedDate: 1978,
    description:
      'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
    pageCount: 748,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
    language: 'en',
    listPrice: {
      amount: 91,
      currencyCode: 'USD',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'xI0wrXaaAcq',
    title: 'non',
    subtitle:
      'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
      'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
    pageCount: 65,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'he',
    listPrice: {
      amount: 90,
      currencyCode: 'USD',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: '9laHCEdSpFy',
    title: 'tristique',
    subtitle: 'consectetur a eu tincidunt condimentum amet nisi',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
      'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
    pageCount: 299,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/11.jpg',
    language: 'he',
    listPrice: {
      amount: 176,
      currencyCode: 'EUR',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'nGhVwZvGCGp',
    title: 'urna ornare gravida',
    subtitle: 'sem vestibulum semper convallis pharetra tempor himenaeos ut',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description:
      'porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla',
    pageCount: 803,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
    language: 'sp',
    listPrice: {
      amount: 116,
      currencyCode: 'USD',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'Q8Q9Lsd03BD',
    title: 'consequat neque volutpat',
    subtitle: 'vel quis taciti fermentum feugiat ullamcorper curae praesent',
    authors: ['Dr. Seuss'],
    publishedDate: 1978,
    description:
      'curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare',
    pageCount: 891,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/5.jpg',
    language: 'en',
    listPrice: {
      amount: 145,
      currencyCode: 'EUR',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'bd7a76kARao',
    title: 'risus',
    subtitle: 'pretium bibendum pharetra curabitur quisque dictumst',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
      'auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus',
    pageCount: 86,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
    language: 'sp',
    listPrice: {
      amount: 157,
      currencyCode: 'ILS',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'qKyG0vqeO3e',
    title: 'interdum etiam vulputate',
    subtitle: 'velit sapien eget tincidunt nunc tortor',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
      'aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad',
    pageCount: 882,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/17.jpg',
    language: 'sp',
    listPrice: {
      amount: 57,
      currencyCode: 'USD',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: '2RvT48ZNInj',
    title: 'sagittis justo',
    subtitle: 'etiam primis proin praesent placerat nisi fermentum nisi',
    authors: ['Agatha Christie'],
    publishedDate: 2011,
    description:
      'nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus',
    pageCount: 598,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/8.jpg',
    language: 'en',
    listPrice: {
      amount: 167,
      currencyCode: 'ILS',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: '5z2s9pDXAYj',
    title: 'quam ullamcorper himenaeos',
    subtitle: 'ut placerat eu dapibus sapien sodales laoreet',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
      'etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam',
    pageCount: 608,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/3.jpg',
    language: 'he',
    listPrice: {
      amount: 150,
      currencyCode: 'USD',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'zBZu5cDEWha',
    title: 'quis',
    subtitle: 'suscipit turpis etiam turpis libero lobortis',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description:
      'etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor',
    pageCount: 583,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/6.jpg',
    language: 'en',
    listPrice: {
      amount: 58,
      currencyCode: 'ILS',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'aOI7tQuPZ2f',
    title: 'aliquam aliquet dapibus',
    subtitle:
      'neque eu purus euismod placerat adipiscing odio egestas consequat',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
      'dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt',
    pageCount: 497,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/7.jpg',
    language: 'en',
    listPrice: {
      amount: 78,
      currencyCode: 'USD',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'WBooB82Uvwu',
    title: 'class',
    subtitle:
      'elit enim ultricies amet imperdiet a molestie class elementum venenatis',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
      'rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla',
    pageCount: 804,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
    language: 'en',
    listPrice: {
      amount: 118,
      currencyCode: 'ILS',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'xm1z5bbZjlS',
    title: 'vitae',
    subtitle: 'class habitant at commodo semper ligula a bibendum',
    authors: ['Leo Tolstoy'],
    publishedDate: 1999,
    description:
      'himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus',
    pageCount: 231,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
    language: 'he',
    listPrice: {
      amount: 60,
      currencyCode: 'EUR',
      isOnSale: false,
    },
    reviews: [],
  },
  {
    id: 'u3j6QIKLlJb',
    title: 'rhoncus vivamus',
    subtitle: 'nullam class risus amet senectus scelerisque etiam curabitur',
    authors: ['Agatha Christie'],
    publishedDate: 1978,
    description:
      'torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis',
    pageCount: 652,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    language: 'he',
    listPrice: {
      amount: 110,
      currencyCode: 'USD',
      isOnSale: true,
    },
    reviews: [],
  },
  {
    id: 'vxYYYdVlEH3',
    title: 'donec mi ullamcorper',
    subtitle:
      'varius malesuada augue molestie sollicitudin faucibus mi eu tempus',
    authors: ['William Shakespeare'],
    publishedDate: 2011,
    description:
      'aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed',
    pageCount: 904,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
    language: 'sp',
    listPrice: {
      amount: 186,
      currencyCode: 'ILS',
      isOnSale: true,
    },
    reviews: [],
  },
];

// _createBooks();

function query(filterBy) {
  if (filterBy) {
    let { name, minPrice, maxPrice } = filterBy;
    minPrice = minPrice ? minPrice : 0;
    maxPrice = maxPrice ? maxPrice : Infinity;
    const booksToShow = gBooks.filter((book) => {
      return (
        book.title.includes(name) &&
        book.listPrice['amount'] <= maxPrice &&
        book.listPrice['amount'] >= minPrice
      );
    });
    console.log(booksToShow);
    return Promise.resolve(booksToShow);
  }
  return Promise.resolve(gBooks);
}

function addReview(id, review) {
  var bookIdx = gBooks.findIndex(function (book) {
    return book.id === id;
  });
  gBooks[bookIdx].reviews.push(review);
  _saveBooksToStorage();
  return Promise.resolve();
}

function deleteReview(bookId, reviewId) {
  var bookIdx = gBooks.findIndex(function (book) {
    return bookId === book.id;
  });

  var reviewIdx = gBooks[bookIdx].reviews.findIndex(function (review) {
    return reviewId === review.id;
  });
  gBooks[bookIdx].reviews.splice(reviewIdx, 1);
  _saveBooksToStorage();
  return Promise.resolve();
}

function getReviews(id) {
  var book = gBooks.find(function (book) {
    return book.id === id;
  });
  return Promise.resolve(book.reviews);
}

function getBookById(bookId) {
  var book = gBooks.find(function (book) {
    return bookId === book.id;
  });
  return Promise.resolve(book);
}

function _saveBooksToStorage() {
  storageService.saveToStorage(KEY, gBooks);
}

// function getVendors() {
//     return gVendors;
// }

// function deleteBook(carId) {
//   var bookIdx = gBooks.findIndex(function (book) {
//     return bookId === book.id;
//   });
//   gBooks.splice(bookIdx, 1);
//   _saveBooksToStorage();
// }

// function addBook(vendor, speed) {
//   var book = _createBook(vendor, speed);
//   gBooks.unshift(book);
//   _saveBookssToStorage();
// }

// function updateBook(bookId, newSpeed) {
//   var book = gBooks.find(function (book) {
//     return book.id === bookId;
//   });
//   book.maxSpeed = newSpeed;
//   _saveBooksToStorage();
// }

// function _createBook(vendor, speed) {
//   if (!speed) speed = getRandomIntInclusive(1, 200);
//   return {
//     id: makeId(),
//     vendor: vendor,
//     maxSpeed: speed,
//     desc: makeLorem(),
//   };
// }

// function _createBooks() {
//   var books = loadFromStorage(KEY);
//   if (!books || !books.length) {
//     books = [];
//     for (let i = 0; i < 20; i++) {
//     //   var vendor = gVendors[getRandomIntInclusive(0, gVendors.length - 1)];
//       books.push(_createBook());
//     }
//   }
//   gBooks = books;
//   _saveBooksToStorage();
// }

// KEY AIzaSyB639pi0Hi9sIlG60DzZCqBJGXWzQHcOLI

function getBooksFromApi(bookName) {
  const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`;
  return axios.get(url).then((res) => {
    console.log(res);
    return res.data.items;
  });
}

function getBooksFromApiSample(bookName) {
  var books = [
    {
      kind: 'books#volumes',
      totalItems: 384,
      items: [
        {
          kind: 'books#volume',
          id: 'nBuA0hmspdMC',
          etag: 'CPdzI+nFle0',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC',
          volumeInfo: {
            title: 'Effective JavaScript',
            subtitle: '68 Specific Ways to Harness the Power of JavaScript',
            authors: ['David Herman'],
            publisher: 'Addison-Wesley',
            publishedDate: '2012-11-26',
            description:
              '“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9780132902250',
              },
              {
                type: 'ISBN_10',
                identifier: '0132902257',
              },
            ],
            readingModes: {
              text: true,
              image: true,
            },
            pageCount: 240,
            printType: 'BOOK',
            categories: ['Computers'],
            averageRating: 5,
            ratingsCount: 1,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: true,
            contentVersion: '2.7.6.0.preview.3',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=nBuA0hmspdMC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ...',
          },
        },
        {
          kind: 'books#volume',
          id: 'wVDCjwEACAAJ',
          etag: 'bAIni1oIvso',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/wVDCjwEACAAJ',
          volumeInfo: {
            title: 'Effective Javascript',
            subtitle: '68 Specific Ways to Harness the Power of Javascript',
            authors: ['David Herman'],
            publishedDate: '2016-03-08',
            description:
              "\"It's uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You'll find when you finish the book that you've gained a strong and comprehensive sense of mastery.\"-Paul Irish, developer advocate, Google Chrome \"This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It's one of the few books on JS that I'll recommend without hesitation.\"-Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language's flexible, expressive features and how to avoid its pitfalls. No matter how long you've been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma's JavaScript standardization committee, illuminates the language's inner workings as never before-helping you take full advantage of JavaScript's expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you'll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You'll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript's functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript's unique \"run-to-completion\" approach to concurrency",
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '1530427223',
              },
              {
                type: 'ISBN_13',
                identifier: '9781530427222',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 228,
            printType: 'BOOK',
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_Javascript.html?hl=&id=wVDCjwEACAAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=wVDCjwEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              '&quot;-Paul Irish, developer advocate, Google Chrome &quot;This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It&#39;s one of the few books on JS that I&#39;ll recommend without hesitation.',
          },
        },
        {
          kind: 'books#volume',
          id: 'yg0fBAAAQBAJ',
          etag: 'kk3VTvhVKzc',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/yg0fBAAAQBAJ',
          volumeInfo: {
            title:
              'Effective JavaScript　JavaScriptを使うときに知っておきたい68の冴えたやり方',
            authors: ['Devid Herman'],
            publisher: '翔泳社',
            publishedDate: '2013-02-18',
            description:
              'JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場！微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど！」は、伊達じゃない。',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9784798131115',
              },
              {
                type: 'ISBN_10',
                identifier: '4798131113',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 202,
            printType: 'BOOK',
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '4.487.0.0.preview.1',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=yg0fBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'ja',
            previewLink:
              'http://books.google.com/books?id=yg0fBAAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=yg0fBAAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_JavaScript_JavaScript%E3%82%92%E4%BD%BF%E3%81%86.html?hl=&id=yg0fBAAAQBAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=yg0fBAAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリー ...',
          },
        },
        {
          kind: 'books#volume',
          id: 'zvuGAQAACAAJ',
          etag: 'Jg3YVxIEDtw',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/zvuGAQAACAAJ',
          volumeInfo: {
            title: 'Effective Javascript',
            subtitle: '30 Specific Ways to Harness the Power of Javascript',
            authors: ['David Herman'],
            publishedDate: '2012',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:796839651',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 132,
            printType: 'BOOK',
            categories: ['Electronic books'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=zvuGAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=zvuGAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_Javascript.html?hl=&id=zvuGAQAACAAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=zvuGAQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'lT2g_y4VYx0C',
          etag: 'RkkvlIvKK0c',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/lT2g_y4VYx0C',
          volumeInfo: {
            title: 'Effective JavaScript',
            authors: ['Devid Herman'],
            publisher: '翔泳社',
            publishedDate: '2013-04-13',
            description:
              'JavaScriptを使うときに知っておきたい68の冴えたやり方 もはやWebアプリケーション作成のデファクトスタンダードとなった感のある開発言語・JavaScriptが、定番の“Effective”シリーズに、満を持して登場!微妙な挙動に悩むプログラマや、よりシンプルで可読性に富んだコードを志向する開発者に、実践的で即効性のある処方を施してくれる1冊です。68の「なるほど!」は、伊達じゃない。 ※本電子書籍は同名出版物を底本とし作成しました。記載内容は印刷出版当時のものです。 ※印刷出版再現のため電子書籍としては不要な情報を含んでいる場合があります。 ※印刷出版とは異なる表記・表現の場合があります。予めご了承ください。 ※プレビューにてお手持ちの電子端末での表示状態をご確認の上、商品をお買い求めください。 (翔泳社)',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9784798131528',
              },
              {
                type: 'ISBN_10',
                identifier: '4798131520',
              },
            ],
            readingModes: {
              text: true,
              image: true,
            },
            pageCount: 202,
            printType: 'BOOK',
            categories: ['Technology & Engineering'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: true,
            contentVersion: '4.1329.533.0.preview.3',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'ja',
            previewLink:
              'http://books.google.com/books?id=lT2g_y4VYx0C&pg=PT268&dq=effective+javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=lT2g_y4VYx0C&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=lT2g_y4VYx0C',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: true,
              acsTokenLink:
                'http://books.google.com/books/download/Effective_JavaScript-sample-epub.acsm?id=lT2g_y4VYx0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                'http://books.google.com/books/download/Effective_JavaScript-sample-pdf.acsm?id=lT2g_y4VYx0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=lT2g_y4VYx0C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              '主な訳書に、『MASM パワープログラミング』(翔泳社)、『\u003cb\u003eEffective\u003c/b\u003e C++ 改訂第2 ... [主な参考文献]『\u003cb\u003eJavaScript\u003c/b\u003e』第6 版(David Flanagan 著、村上列訳、オライリー・&nbsp;...',
          },
        },
        {
          kind: 'books#volume',
          id: 'NmCTPQAACAAJ',
          etag: 'MPp4coK1vGI',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/NmCTPQAACAAJ',
          volumeInfo: {
            title: 'Effective Javascript',
            authors: ['Kriesing', 'Victoria Roberts'],
            publishedDate: '2009-04-15',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '013815791X',
              },
              {
                type: 'ISBN_13',
                identifier: '9780138157913',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            printType: 'BOOK',
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=NmCTPQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=NmCTPQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_Javascript.html?hl=&id=NmCTPQAACAAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=NmCTPQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'gg20DgAAQBAJ',
          etag: 'WR2bz2K4Uoo',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/gg20DgAAQBAJ',
          volumeInfo: {
            title: 'Effective JavaScript 中文版(電子書)',
            subtitle: '',
            authors: ['David Herman'],
            publisher: '碁峰資訊股份有限公司',
            publishedDate: '2013-07-29',
            description:
              '駕馭 JavaScript 的 68 個具體作法 JavaScript 發明人 Brendan Eich 專文推薦 「少有程式語言達人能夠像 David 這樣寫出流暢通順且措辭淺白的文字，透過其深邃的洞察力，他以引人入勝的方式帶我們逐一探索 JavaScript 的語法和語意，一路提醒我們要特別注意的事項，並以實際的使用案例來補充說明，步調和緩而舒適。讀完此書後，你會對 JavaScript 有更穩健且透徹的理解。」 —Paul Irish，Google Chrome 的開發人員大使 「這本書並不適合那些尋找捷徑的人，這是刻苦獲得的經驗所提煉出來的精華。它是少數我會毫不猶豫推薦的 JavaScript 書籍。」 —Alex Russell，TC39 成員、Google 軟體工程師 為了真正精通 JavaScript，你必須知道如何有效運用這個語言富有彈性又具表達能力的特色，以及知道如何避免其中常見的陷阱。不管你已經撰寫了多久的 JavaScript 程式碼，Effective JavaScript 都能增進你對這個強大語言的理解，讓你能夠建置更容易預測、更可靠且更容易維護的程式。 作者 David Herman 具有 Ecma 的 JavaScript 標準化委員會數年的工作經驗，他以前所未見的深度闡明這個語言的內部運作原理，幫助你完全掌握 JavaScript 強大的表達能力。立基於 JavaScript 最新的幾個版本，本書提供經過充分驗證的技巧以及最佳實務做法，協助你為未來的開發工作做好準備。 Effective JavaScript 是由 68 個經過驗證、能夠幫助你寫出更好的 JavaScript 程式碼的具體作法所構成，並輔以實例來闡述說明。你會學到如何為每個專案挑選適當的程式寫作風格、管理無法預料的問題，並以更良好的方式來處理 JavaScript 程式設計的各個面向，諸如資料結構或共時性（concurrency）。關鍵的特色包括： ■ 以更好的方式來使用基於原型（prototype）的物件導向程式設計 ■ 使用陣列與字典（dictionary）物件時可能遭遇到的細微問題以及它們的解法 ■ 對 JavaScript 函式與變數範疇（variable scoping）語意的精確且務實的解說 ■ 實用的 JavaScript 程式設計模式與慣用語法，例如選項物件（options objects）及方法鏈串（method chaining） ■ 深入介紹 JavaScript 獨特的「run-to-completion」共時模型 David Herman，Mozilla Research 的資深研究員。他是 Ecma TC39 的成員，這個委員會負責 JavaScript 的標準化工作。他擁有 Grinnell College 的電腦科學學士學位，以及 Northeastern University 的電腦科學碩士與博士學位。 #碁峰資訊 GOTOP Information Inc.',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9789862768921',
              },
              {
                type: 'ISBN_10',
                identifier: '9862768924',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 244,
            printType: 'BOOK',
            categories: ['Computers'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: true,
            contentVersion: 'preview-1.0.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'zh-CN',
            previewLink:
              'http://books.google.com/books?id=gg20DgAAQBAJ&pg=PR3&dq=effective+javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=gg20DgAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8.html?hl=&id=gg20DgAAQBAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                'http://books.google.com/books/download/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8-sample-pdf.acsm?id=gg20DgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=gg20DgAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              '\u003cb\u003eEffective JavaScript\u003c/b\u003e 的各界好評「完全符合 Effective Software Development 系列程式設計書籍的高標準,對從事專業 JavaScript 程式設計工作的任何人來說,Dave Herman&nbsp;...',
          },
        },
        {
          kind: 'books#volume',
          id: 'MjXOAQAACAAJ',
          etag: 'ZZDfPH/nvis',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/MjXOAQAACAAJ',
          volumeInfo: {
            title: 'JavaScript',
            subtitle:
              "2 Books in 1: Beginner's Guide + Best Practices to Programming Code with JavaScript",
            authors: ['Charlie Masterson'],
            publisher: 'Createspace Independent Publishing Platform',
            publishedDate: '2017-03-07',
            description:
              "JavaScript Best Seller: 2 Books In 1! Own this Best-Selling JavaScript Computer Programming Bundle that contains: JavaScript: Beginner's Guide to Programming Code with JavaScript JavaScript: Best Practices to Programming Code with JavaScript For a limited time only, get to own this Amazon top seller for just $21.00! Regularly priced at $30.76. Save time and money by learning the basic essentials of JavaScript AND how to write better and more efficient JavaScript code - all in 1 book! Learn JavaScript programming today and begin your path towards JavaScript programming mastery! Book 1 - JavaScript: Beginner's Guide to Programming Code with JavaScript In the Definitive JavaScript Beginner's Guide, you're about to discover how to... Program code in JavaScript through learning the core essentials that every JavaScript programmer must know. JavaScript is on the internet everywhere we look. Thanks to JavaScript, many of the sites that you enjoy are able to run the way that they are supposed to. And when you understand how JavaScript works, you are going to have the advantage of knowing how websites function effectively. Here is a Preview of What You'll Learn... Essentials of JavaScript programming. Quickly pick up the code examples found on the book and start learning the concepts as you code Major aspects of JavaScript programming - including concepts that are found on other computer languages Various mechanics of JavaScript programming: variables, conditional statements, etc. and why learning these core principles are important to JavaScript programming success How JavaScript and HTML are able to effectively work together to create better web pages ... And much, much more! Added Benefits of owning this book: Get a better understanding of the JavaScript programming language Learn the basic building blocks of the JavaScript programming language Learn how to write effective and efficient JavaScript code for programming success and continue your progress towards JavaScript programming mastery! JavaScript: Best Practices to Programming Code with JavaScript In this Definitive JavaScript Guide on Best Practices, you're about to discover how to... Code more efficiently for Better Performance and Results! Spot the Common JavaScript Mistakes - From mismatched quotes, bad line breaks, HTML conflicts and more! Apply Recommended JavaScript approaches - The DO's and DONT's of JavaScript programming that will help you code achieve its goals immensely! Use Comments and Logging - the proper way to use comments and logging approaches that readers would thank you for! ... And much, much more! Added Benefits of owning this book: Gain a better grasp of efficient and effective JavaScript code to achieve programming success Speed up your programming abilities by avoiding time-wasting mistakes Gain the most important Best Practice concepts in your path towards JavaScript programming mastery! Learning JavaScript can help you in many ways both professionally and personally. By implementing the lessons in this book, not only would you learn one of today's most popular computer languages, but it will serve as your guide in accomplishing your JavaScript goals - whether as a fun hobby or as a starting point into a successful and long term Web Development career. Take action today and reach your JavaScript programming goals. Own this book today for a limited time discount! Scroll to the top of the page and select the \"Buy now\" button.",
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '1544267444',
              },
              {
                type: 'ISBN_13',
                identifier: '9781544267449',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 178,
            printType: 'BOOK',
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=MjXOAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=MjXOAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=MjXOAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=MjXOAQAACAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/JavaScript.html?hl=&id=MjXOAQAACAAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=MjXOAQAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'And when you understand how JavaScript works, you are going to have the advantage of knowing how websites function effectively. Here is a Preview of What You&#39;ll Learn... Essentials of JavaScript programming.',
          },
        },
        {
          kind: 'books#volume',
          id: '4D63DwAAQBAJ',
          etag: 'ERfdzGx03wU',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/4D63DwAAQBAJ',
          volumeInfo: {
            title: 'Effective TypeScript',
            subtitle: '62 Specific Ways to Improve Your TypeScript',
            authors: ['Dan Vanderkam'],
            publisher: '"O\'Reilly Media, Inc."',
            publishedDate: '2019-10-17',
            description:
              'TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript. Author Dan Vanderkam, a principal software engineer at Sidewalk Labs, shows you how to apply these ideas, following the format popularized by Effective C++ and Effective Java (both from Addison-Wesley). You’ll advance from a beginning or intermediate user familiar with the basics to an advanced user who knows how to use the language well. Effective TypeScript is divided into eight chapters: Getting to Know TypeScript TypeScript’s Type System Type Inference Type Design Working with any Types Declarations and @types Writing and Running Your Code Migrating to TypeScript',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9781492053699',
              },
              {
                type: 'ISBN_10',
                identifier: '1492053694',
              },
            ],
            readingModes: {
              text: true,
              image: true,
            },
            pageCount: 264,
            printType: 'BOOK',
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.2.2.0.preview.3',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=4D63DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=4D63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=4D63DwAAQBAJ&pg=PT252&dq=effective+javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=4D63DwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/Effective_TypeScript.html?hl=&id=4D63DwAAQBAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: true,
            },
            pdf: {
              isAvailable: true,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=4D63DwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'Use let/const Instead of var JavaScript&#39;s var has some famously quirky scoping rules. If you&#39;re curious to learn more about them, read \u003cb\u003eEffective JavaScript\u003c/b\u003e.',
          },
        },
        {
          kind: 'books#volume',
          id: 'v3-TDwAAQBAJ',
          etag: 'Jy4gHecrouE',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/v3-TDwAAQBAJ',
          volumeInfo: {
            title: 'JavaScript',
            subtitle: 'Best Practices to Programming Code with JavaScript',
            authors: ['Charlie Masterson'],
            publisher: 'E.C. Publishing via PublishDrive',
            publishedDate: '2017-01-05',
            description:
              "Learn how to write effective and efficient JavaScript code for programming success and continue your progress towards JavaScript programming mastery! In this Definitive JavaScript Guide on Best Practices, you're about to discover how to... Code more efficiently for Better Performance and Results! Spot the Common JavaScript Mistakes - From mismatched quotes, bad line breaks, HTML conflicts and more! Apply Recommended JavaScript approaches - The DO's and DONT's of JavaScript programming that will help you code achieve its goals immensely! Use Comments and Logging – the proper way to use comments and logging approaches that readers would thank you for ... And much, much more! Added Benefits of owning this book: Gain a better grasp of efficient and effective JavaScript code to achieve programming success Speed up your programming abilities by avoiding time-wasting mistakes Gain the most important Best Practice concepts in your path towards JavaScript programming mastery! Learning JavaScript can help you in many ways both professionally and personally. By implementing the lessons in this book, not only would you learn one of today's most popular computer languages, but it will serve as your guide in accomplishing your JavaScript goals – whether as a fun hobby or as a starting point into a successful and long term Web Development career. Take action today and make your programming career goals a reality! Scroll to the top of the page and select the \"Buy now\" button.",
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'PKEY:6610000083749',
              },
            ],
            readingModes: {
              text: true,
              image: true,
            },
            pageCount: 60,
            printType: 'BOOK',
            categories: ['Computers'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: true,
            contentVersion: '1.43.40.0.preview.3',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=v3-TDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=v3-TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'en',
            previewLink:
              'http://books.google.com/books?id=v3-TDwAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api',
            infoLink:
              'http://books.google.com/books?id=v3-TDwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/JavaScript.html?hl=&id=v3-TDwAAQBAJ',
          },
          saleInfo: {
            country: 'IL',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'IL',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: true,
              acsTokenLink:
                'http://books.google.com/books/download/JavaScript-sample-epub.acsm?id=v3-TDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            pdf: {
              isAvailable: true,
              acsTokenLink:
                'http://books.google.com/books/download/JavaScript-sample-pdf.acsm?id=v3-TDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=v3-TDwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'Learn how to write effective and efficient JavaScript code for programming success and continue your progress towards JavaScript programming mastery! In this Definitive JavaScript Guide on Best Practices, you&#39;re about to discover how to.',
          },
        },
      ],
    },
  ];
  return Promise.resolve(books);
}

function addBook(book) {
  const isFound = gBooks.find((item) => {
    return item.id === book.id;
  });
  if (isFound) {
    return;
  }

  const newBook = {
    id: book.id,
    title: book.volumeInfo.title || 'No Title Found',
    subtitle: book.volumeInfo.subtitle || 'No Subtitle Found',
    authors: book.volumeInfo.authors || ['No Authors Found'],
    publishedDate: book.volumeInfo.publishedDate || '2021',
    description: book.volumeInfo.description || 'No Description Found',
    pageCount: book.volumeInfo.pageCount || '100',
    categories: book.volumeInfo.categories || ['No Categories Found'],
    thumbnail:
      book.volumeInfo.imageLinks.thumbnail ||
      'http://coding-academy.org/books-photos/20.jpg',
    language: book.volumeInfo.language || 'en',
    listPrice: {
      amount: 118,
      currencyCode: 'ILS',
      isOnSale: false,
    },
    reviews: [],
  };

  gBooks.push(newBook);
  _saveBooksToStorage();
}

function getNextBookId(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId);
  let nextBookIdx = bookIdx + 1;

  if (nextBookIdx === gBooks.length) nextBookIdx = 0;
  return gBooks[nextBookIdx].id;
}

function getPreviousBookId(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId);
  let nextBookIdx = bookIdx - 1;
  if (nextBookIdx === -1) nextBookIdx = gBooks.length - 1;
  return gBooks[nextBookIdx].id;
}
