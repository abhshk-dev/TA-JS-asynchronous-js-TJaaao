const url='https://www.anapioficeandfire.com/api/books';
let root=document.querySelector('ul');

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
            
*/
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

