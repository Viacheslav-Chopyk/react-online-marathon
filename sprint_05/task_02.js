// Save object { name: "Tom", age: 25 } to localStorage with key: "user"


const localStorage = require("./localStorage.js");
let user = { name: "Tom", age: 25 };
localStorage.setItem('user', JSON.stringify(user));