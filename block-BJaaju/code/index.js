
const url=`https://api.unsplash.com/photos/?client_id=fqghSz53AIu7Bo8BCQQ3EmlJjebYF6ugzyyUD_oomIY`;
const getSearchUrl=(query)=>`https://api.unsplash.com/search/photos?query=${query}&client_id=fqghSz53AIu7Bo8BCQQ3EmlJjebYF6ugzyyUD_oomIY`;
//https://api.unsplash.com/search/photos?page=1&query=office
const root=document.querySelector('.images');

let input =document.querySelector('input');
 

function fetch(url,successHandler){
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload= () => successHandler(JSON.parse(xhr.response));
    xhr.onerror=function(){
        console.error('Something went wrong');
    }
    xhr.send(); 
}


function displayImages(images){
    root.innerHTML="";
    images.forEach((image)=>{
        let li=document.createElement('li');
        let img=document.createElement('img');
        img.src=image.urls.thumb;
        li.append(img);
        root.append(li);
    });
}

fetch(url,displayImages);

function handleSearch(event){
    if(event.keyCode===13 && input.value){
        fetch(getSearchUrl(input.value),(searchResults)=>{
            displayImages(searchResults.results);
        });
        input.value='';
    }
}

input.addEventListener('keyup',handleSearch);

//https://api.unsplash.com/photos/?client_id=fqghSz53AIu7Bo8BCQQ3EmlJjebYF6ugzyyUD_oomIY