// const title = document.getElementById("title");

// const hello = prompt("what is your name?");

// title.innerText = "My Name is " + hello;


// const hellos = document.getElementsByClassName("hello");

// const title = document.getElementsByTagName("h1");

const title = document.querySelector(".hello h1");

// title.innerText = "Hello";

// console.dir(title);

// title.style.color = "blue";

// function handleTitleClick(){
//     console.log("title was clicked!")
// } 

function handleTitleClick(){
    title.style.color = "blue";
} 

title.addEventListener("click", handleTitleClick);

function handleMouseOver() {
    title.style.color = "red"
}
function handleMouseOut() {
    title.style.color = "black"
}

title.addEventListener("mouseover", handleMouseOver);
title.addEventListener("mouseout", handleMouseOut);
