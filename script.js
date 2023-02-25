const bookForm = document.getElementById("bookForm");

const addBookButton = document.getElementById("addBook");
    addBookButton.addEventListener("click", openBookForm);

const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", addBookToLibrary);

let myLibrary = [];


function openBookForm() {
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

function createBookCover(){

    myLibrary.forEach((book, index) => {
        const body = document.body;
        const bookList = document.getElementById("bookList");
        const div = document.createElement("div");
        bookList.append(div);

        bookList.style.display = "grid";
        bookList.style.gridTemplateColumns = "repeat(4, 300px)";
        bookList.style.gridTemplateRows = "min";
        bookList.style.textAlign = "left";


        const title = document.createElement("p");
        title.innerHTML = "Title:" + " " + `${book.title}`;

        const author = document.createElement("p");
        author.innerHTML = "Author:" + " " + `${book.author}`;
    
        const pages = document.createElement("p");
        pages.innerHTML = "Pages:" + " " + `${book.pages}`;

        const read = document.createElement("p");
        read.innerHTML = "Read:" + " " + `${book.read}`;

        div.append(title, author, pages, read);

    });
};

function addBookToLibrary(){
    event.preventDefault();

    let book = {
        title: document.getElementById("book_name").value,
        author: document.getElementById("author_name").value,
        pages: document.getElementById("book_pages").value,
        read: document.getElementById("read_status").value
    };

    myLibrary.push(book);
    localStorage.setItem("myLibraryList", JSON.stringify(myLibrary));
    document.querySelector("form").reset();
    bookForm.style.display = "none";
    updateLibrary();
    createBookCover();
};

function updateLibrary(){

};

function displayBooks() {
    //loops through array and displays each book on the page

};


//Next Steps:
    // take user input and store in array - done
    // display array items and loop through them
    // add delete button to remove each book
    // add function that showsn read status/ change status of book
        //toggle read status on Book prototype


//add new book button 
    //shows form allowing users to input details for new book
    //event.preventDefault()

//add button to remove each book's display from library

//Add button on book display to change read status