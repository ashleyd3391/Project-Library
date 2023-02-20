const bookForm = document.getElementById("bookForm");
const addBookButton = document.getElementById("addBook");
    addBookButton.addEventListener("click", addBookToLibrary);

let myLibrary = [{

    title: "Scapegracers",
    author: "H.A. Clarke",
    pages: "400",
    read: "false"
}, 
{
    title: "Morrigan's Cross",
    author: "Nora Roberts",
    pages: "400",
    read: "true"
}];

function createBookElement(el, content, className){
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

function createBookItem(book, index) {
    const bookItem = document.createElement("div");
    bookItem.setAttribute("id", index);
    bookItem.setAttribute("key", index);
    bookItem.setAttribute("class", "card book");
    bookItem.appendChild(createBookElement("h1", "Title: ${book.title}", "book-title"));
    bookItem.appendChild(createBookElement("h1", "Author: ${book.author}", "book-author"));
    bookItem.appendChild(createBookElement("h1", "Pages: ${book.pages}", "book-pages"));
    book.insertAdjacentElement("afterbegin", bookItem);
};

function renderBooks(){
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    })
};

renderBooks();

function addBookToLibrary() {
    document.getElementById("bookForm").style.display = "initial";
    bookForm.style.display = "grid";
    bookForm.style.gridTemplateColumns = "300px";
    bookForm.style.rowGap = "20px";
    bookForm.style.backgroundColor = "rgb(125, 125, 206)";
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