/*
let times=[1,2,3,4];

let timesPromise=times.map(second => new Promise((resolve)=>{
    setTimeout(()=> resolve(Math.random()),second * 1000);
}));

Promise.all(timesPromise).then(console.log);

-------- 

let users=['getify','prank7','abhshk-dev','suraj122','nnnkit'];

let usersPromises=users.map((user)=>{
   return fetch(`https://api.github.com/users/${user}`).then((res) => res.json());
});

Promise.all(usersPromises).then(users =>{
    users.forEach(user => console.log(user.followers));
});  
 
-----------



 let promiseOne= fetch(`https://random.dog/woof.json`).then((res)=> res.json());
 let promiseTwo= fetch(`https://aws.random.cat/meow`).then((res)=> res.json());

 Promise.race([promiseOne,promiseTwo]).then(console.log);



 const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

//Promise.allSettled([one,two,three]).then(console.log);
Promise.all([one,two,three]).then(console.log);

 

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

*/