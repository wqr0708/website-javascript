//How to accept user input

//1. Easy way = window prompt
//2. PROFESSIONAL way = HTML textbox

// let username;

// username = window.prompt("What is your username?");

// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}