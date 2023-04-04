const bookForm = document.getElementById("bookForm");

const addBookButton = document.getElementById("addBook");
    addBookButton.addEventListener("click", openBookForm);

const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", addBookToLibrary);

const bookList = document.getElementById("bookList");

let bookNumber = 0;

let myLibrary = [];


function openBookForm() {

    document.getElementById("bookForm").style.display = "initial";
    bookForm.style.position = "absolute";
    bookForm.style.zIndex = "5";
    bookForm.style.display = "grid";
    bookForm.style.gridTemplateColumns = "300px";
    bookForm.style.rowGap = "20px";
    bookForm.style.backgroundColor = "rgb(125, 125, 206)";
    bookForm.style.width = "300px";
    bookForm.style.padding = "40px";
    bookForm.style.marginLeft = "40%";
    bookForm.style.marginTop = "-33%";
    bookForm.style.fontSize = "1.5rem";
    bookForm.style.color = "white";

    submitButton.style.width = "150px";
    submitButton.style.marginLeft = "80px";
    submitButton.style.height = "40px";
    submitButton.style.fontSize = "1.3rem";
    submitButton.style.color = "rgb(125, 125, 206)"
};


function createBookCover(){

    myLibrary.forEach((book) => {
        const bookList = document.getElementById("bookList");
        const div = document.createElement("div");
        bookList.append(div);

        bookList.style.display = "grid";
        bookList.style.gridTemplateColumns = "repeat(9, 100px)";
        bookList.style.gridTemplateRows = "min";
    

        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.borderColor = "rgb(182, 144, 233)";
        div.style.height = "250px";
        div.style.width = "250px";
        div.style.margin = "10px";
        div.style.padding = "20px";

        const title = document.createElement("p");
        title.innerHTML = "Title:" + " " + `${book.title}`;
        title.style.color = "rgb(125, 125, 206)";

        const author = document.createElement("p");
        author.innerHTML = "Author:" + " " + `${book.author}`;
        author.style.color = "rgb(125, 125, 206)";
    
        const pages = document.createElement("p");
        pages.innerHTML = "Pages:" + " " + `${book.pages}`;
        pages.style.color = "rgb(125, 125, 206)";

        const read = document.createElement("button");
        read.innerHTML = "Read: on";  
        read.style.backgroundColor = "rgb(125, 125, 206)";
        read.style.fontSize = "1rem";
        read.style.color = "white";
        
        div.append(title, author, pages);


        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.style.height = "50px";
        removeButton.style.width = "100px";
        removeButton.style.marginLeft = "10px";
        removeButton.style.marginTop = "220px";
        removeButton.style.backgroundColor = "rgb(182, 144, 233)";
        removeButton.style.fontSize = "1rem";
        removeButton.style.color = "white";

        bookList.append(removeButton, read);
        removeButton.addEventListener("click", () => {

            bookList.removeChild(div);
            bookList.removeChild(removeButton);
            bookList.removeChild(read);
            myLibrary.remove(book);
        });

        removeButton.removeEventListener("click", () => {

            bookList.removeChild(div);
            bookList.removeChild(removeButton);
        });

        read.style.height = "50px";
        read.style.width = "100px";
        read.style.marginLeft = "-90px";
        read.style.marginTop = "150px";



        function changeReadStatus(){
            if(read.innerHTML == "Read: on"){
                read.innerHTML = "Read: off";
                read.style.backgroundColor = "white";
                read.style.color = "rgb(125, 125, 206)";
                read.style.borderColor = "rgb(125, 125, 206)";
            } 
            
            else{
                read.innerHTML = "Read: on";
                read.style.backgroundColor = "rgb(125, 125, 206)";
                read.style.color = "white";
            }
        };

        read.addEventListener("click", changeReadStatus);
    })};


function addBookToLibrary(){
    event.preventDefault();

    let book = {
        title: document.getElementById("book_name").value,
        author: document.getElementById("author_name").value,
        pages: document.getElementById("book_pages").value,

    };

    myLibrary.push(book);
    localStorage.setItem("myLibraryList", JSON.stringify(myLibrary));

    document.querySelector("form").reset();
    bookForm.style.display = "none";
    createBookCover();

    myLibrary = [];

};

