const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Step 2: Manipulating Existing Elements
const bookStoreTitle = document.querySelector('#header');
bookStoreTitle.textContent = bookStore.name;

// Step 3: Book Elements
const bookList = document.querySelector('#book-list');

// IMPORTANT: Clear the placeholder item so the tests find your book images first
bookList.innerHTML = '';

bookStore.books.forEach(book => {
    
    // Create elements for each book
    const bookContainer = document.createElement('li'); 
    const bookTitle = document.createElement('h3');     
    const bookAuthor = document.createElement('p');     
    const bookImage = document.createElement('img');    

    // Change the textContent/src to match the book object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    
    // Use book.imageUrl (the correct key from your object)
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title; 

    // Append book title, author, and image to the bookContainer (li)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append the bookContainer (li) to the bookList (ul)
    bookList.appendChild(bookContainer);
});
