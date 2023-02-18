const bookForm = document.getElementById("bookForm");
const addBookButton = document.getElementById("addBook");
    addBookButton.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function Book() {
    title: ""
    pages: ""
    author: ""
    read: ""
    //constructor
};

function addBookToLibrary() {
    document.getElementById("bookForm").style.display = "initial";
    bookForm.style.display = "grid";
    bookForm.style.gridTemplateColumns = "300px";
    bookForm.style.rowGap = "20px";
    bookForm.style.backgroundColor = "pink";
    bookForm.style.width = "300px";
    bookForm.style.padding = "20px";
    bookForm.style.marginLeft = "40%";
    bookForm.style.marginTop = "-33%";
    
    // do stuff here
};

function displayBooks() {
    //loops through array and displays each book on the page
};

//add new book button 
    //shows form allowing users to input details for new book
    //event.preventDefault()

//add button to remove each book's display from library

//Add button on book display to change read status