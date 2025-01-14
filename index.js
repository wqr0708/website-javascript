// const = a variable that can't be changed

// let PI = 3.14159;
const PI = 3.14159;
let radius;
let circumference;

// PI = 420.489;

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm"
}