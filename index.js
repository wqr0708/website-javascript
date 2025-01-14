const decreastBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increastBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increastBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

decreastBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}