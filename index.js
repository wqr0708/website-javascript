// const MAX = 100;
// const MIN = 20;

// let randomNum = Math.floor(Math.random() * (MAX - MIN)) + MIN;

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min) + min);
    randomNum2 = Math.floor(Math.random() * (max - min) + min);
    randomNum3 = Math.floor(Math.random() * (max - min) + min);
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}
