class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  //method
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book One",
        author: "John Doe",
        isbn: "45545",
      },
    ];
    const books = StoredBooks;

    //add method to list
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    // holds whole information
    row.innerHTML = ` 
    <td>${book.title}</td>
    <td>${book.author}</td>;
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    // appends row to the list
    list.appendChild(row);
  }
}

//

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event :  add aa book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();

  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  //  instatiate book
  const book = new book(title, author, isbn);

  console.log(book);
});
wgduwgdugdw;
