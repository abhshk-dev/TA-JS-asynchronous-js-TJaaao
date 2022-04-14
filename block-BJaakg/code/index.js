/*


//data fetching
fetch(url).then(response =>response.json()).then(data => displayUI(data) );

/*
<li class="books">
                <h2 class="title">
                    Clash of titans
                </h2>
                <p class="author">
                    George RR Martin
                </p>
                <button class="btn">Show characters(10)</button>    
            </li>
            

function displayUI(data){
    root.innerHTML='';
    data.forEach((book)=> {   
    let li=document.createElement('li');
    li.classList.add('books')
    let h2=document.createElement('h2');
    h2.innerText=book.name;
    h2.classList.add('title');
    let p=document.createElement('p');
    p.innerText=book.authors[0];
    p.classList.add('author')
    let button=document.createElement('button'); 
    button.innerText=`Show characters(${book.characters.length})`;
    button.classList.add('btn');
    button.addEventListener('click',(e)=>{
        book.characters.forEach(character =>{
            console.log(character);
        })
    })
    li.append(h2,p,button);
    root.append(li);
    });
}
 
*/
(function(){
    let modalWindow = document.querySelector(".modal-window");
let modalClose = document.querySelector(".modal-close");
let openBtn = document.querySelector(".btn");
let booksUL = document.querySelector(".book-list");
const booksUrl = "https://www.anapioficeandfire.com/api/books";
let charactersUL=document.querySelector('.characters');

function handleSpinner(rootElm,status=false){
    if(status){
        rootElm.innerHTML=`<div class="donut"></div>`;
    }
}

function displayCharacters(characters) {
    handleSpinner(charactersUL,true);
    Promise.all(characters.map(character => fetch(character).then(res => res.json())))
    .then((charactersData) => {
        charactersUL.innerHTML = '';
        charactersData.forEach(ch => {
            let li = document.createElement('li');
            li.innerText = `${ch.name} (${ch.aliases.join(' ')})`;
            charactersUL.append(li);
        })
    })
}

function displayBooks(data) {
    booksUL.innerHTML='';
    data.forEach((book) => {
    let li = document.createElement("li");
    li.classList.add("books");
    let h2 = document.createElement("h2");
    h2.innerText = book.name;
    h2.classList.add("title");
    let p = document.createElement("p");
    p.innerText = book.authors.join(' ');
    p.classList.add("author");
    let button = document.createElement("button");
    button.innerText = `Show characters(${book.characters.length})`;
    button.classList.add('btn');
    button.addEventListener("click", () => {
        modalWindow.style.display = "block";
        displayCharacters(book.characters);
        modalWindow.querySelector(".modal-close").
        addEventListener("click", () => {
          modalWindow.style.display = "none";
        });
      });
    li.append(h2,p,button);
    booksUL.append(li);
  });
}

function fetchBooks() {
    handleSpinner(booksUL,true)
  fetch(booksUrl)
    .then((res) => res.json())
    .then((booksData) => {
      displayBooks(booksData);
    }).finally(()=>{
        handleSpinner(booksUL);
    })
}

fetchBooks();


})();

