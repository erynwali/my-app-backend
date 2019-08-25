
const fs = require('fs'); 

const validator = require('validator'); 

const add = require('./utils'); 

const sum = add (4, 2); 

let mail = validator.isEmail('erynwali@hotmail.com'); 

console.log ('email is valid or not', mail); 

console.log("This is my app", sum); 

console.log('......'); 
