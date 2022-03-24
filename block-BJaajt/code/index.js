let input = document.querySelector("input");
let img = document.querySelector("img");
let h1 = document.querySelector(".user");
let p = document.querySelector("p");

function handleInput(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      img.src = userData.avatar_url;
      h1.innerText = userData.name;
      p.innerText = userData.login;
      console.log(userData);
    };
    xhr.send();
  }
}

input.addEventListener("keyup", handleInput);
