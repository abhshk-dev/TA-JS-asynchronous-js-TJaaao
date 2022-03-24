let input = document.querySelector("input");
let img = document.querySelector("img");
let h1 = document.querySelector(".user");
let p = document.querySelector("p");
let followers=document.querySelector('.followers');
let following=document.querySelector('.following');


function fetch(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`/followers);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.send();
}
function displayUI(data) {
  img.src = data.avatar_url;
  h1.innerText = data.name;
  p.innerText = data.login;
  followers.innerText=`Followers:-${data.followers}`;
  following.innerText=`Following:-${data.following}`;
  console.log(data);
}
function handleInput(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.send();
    event.target.value='';
  }
}

input.addEventListener("keyup", handleInput);


// Get random Cat

let catsImg=document.querySelector(".cats img");
let catsBtn=document.querySelector(".cats button");

function handleClick(event){
    console.log(event.target)
    let xhr=new XMLHttpRequest('');
    xhr.open('GET','https://api.thecatapi.com/v1/images/search?limit=1&size=full');
    xhr.onload=function(){
        let catsData=JSON.parse(xhr.response);
        catsImg.src=catsData[0].url;
    }
    xhr.send();
}
catsBtn.addEventListener('click',handleClick);