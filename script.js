const bookForm = document.getElementById("bookForm");

const addBookButton = document.getElementById("addBook");
    addBookButton.addEventListener("click", openBookForm);

const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", addBookToLibrary);

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

function addBookToLibrary(){
    event.preventDefault();

    let book = {
        title: document.getElementById("book_name").value,
        author: document.getElementById("author_name").value,
        pages: document.getElementById("book_pages").value,
        read: document.getElementById("read_status").value
    }

    myLibrary.push(book);
    document.querySelector("form").reset();
    localStorage.setItem("myLibraryList", JSON.stringify(myLibrary));
    bookForm.style.display = "none";
     createBookCover();
};

function displayBooks() {
    //loops through array and displays each book on the page

};

function createBookCover(){
    const bookCover = document.getElementById("bookList");
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookItem = document.createElement("div");
        bookItem.innerHTML = `<p>${book.title}</p>`;
        myLibrary.appendChild(bookItem);
    }
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