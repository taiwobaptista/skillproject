let myMenu=document.querySelector(".nav-menu");
let dropDown=document.querySelector(".nav-bar");
dropDown.addEventListener("click", show);
function show() {
    myMenu.classList.toggle("empty");
    
}

let mySign=document.querySelector("#sign");
let myPop=document.querySelector("#pop");
mySign.addEventListener("click",display);
function display() {
    myPop.classList.toggle("view");
}