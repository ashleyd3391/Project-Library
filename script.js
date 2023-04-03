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
    bookForm.style.display = "grid";
    bookForm.style.gridTemplateColumns = "300px";
    bookForm.style.rowGap = "20px";
    bookForm.style.backgroundColor = "rgb(125, 125, 206)";
    bookForm.style.width = "300px";
    bookForm.style.padding = "20px";
    bookForm.style.marginLeft = "40%";
    bookForm.style.marginTop = "-33%";

};


function createBookCover(){

    myLibrary.forEach((book) => {
        const bookList = document.getElementById("bookList");
        const div = document.createElement("div");
        bookList.append(div);

        bookList.style.display = "grid";
        bookList.style.gridTemplateColumns = "repeat(4, 300px)";
        bookList.style.gridTemplateRows = "min";
    

        div.style.border = "solid";
        div.style.borderWidth = "1px";

        div.style.padding = "20px";
        div.style.zIndex = "-2";

        const title = document.createElement("p");
        title.innerHTML = "Title:" + " " + `${book.title}`;

        const author = document.createElement("p");
        author.innerHTML = "Author:" + " " + `${book.author}`;
    
        const pages = document.createElement("p");
        pages.innerHTML = "Pages:" + " " + `${book.pages}`;

        const read = document.createElement("button");
        read.innerHTML = "Read:" + " " + `${book.read}`;  
        
        div.append(title, author, pages, read);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.style.height = "50px";
        removeButton.style.width = "100px";
        removeButton.style.marginLeft = "-200px";
        removeButton.style.marginTop = "220px";
        bookList.appendChild(removeButton);
        removeButton.addEventListener("click", () => {

            bookList.removeChild(div);
            bookList.removeChild(removeButton);
        });

        removeButton.removeEventListener("click", () => {

            bookList.removeChild(div);
            bookList.removeChild(removeButton);
        });

        read.style.height = "50px";
        read.style.width = "100px";
        read.style.marginLeft = "-500px";
        read.style.marginTop = "150px";
        bookList.append(read);

        function changeReadStatus(){
            if(read.innerHTML == "Read: on"){
                read.innerHTML = "Read: off";
            } 
            
            else{
                read.innerHTML = "Read: on";
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
        read: document.getElementById("read_status").value
    };

    myLibrary.push(book);
    localStorage.setItem("myLibraryList", JSON.stringify(myLibrary));
    document.querySelector("form").reset();
    bookForm.style.display = "none";
    createBookCover();
    updateLibrary();
};

function updateLibrary(){
        myLibrary = [];
        bookList.removeChild(emptyAlert);
};


function displayBooks() {
    //loops through array and displays each book on the page

};


const emptyAlert = document.createElement("h1");
emptyAlert.innerHTML = "Your library is empty!";
bookList.appendChild(emptyAlert);
emptyAlert.style.zIndex = "-1";
emptyAlert.style.marginTop = "120px";





//Next Steps:
    // take user input and store in array -         done
    // display array items and loop through them -  done
    // add delete button to remove each book -      done

    // add function that shows read status/ change status of book
        //toggle read status on Book prototype -    in progress

    // change read status on form form check to selected options of yes or no
    
    // fix sizing of booklist div so that multiple books align evenly