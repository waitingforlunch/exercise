//3.3 Events
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     h1.style.color = "blue";
// } 

// function handleMouseEnter () {
//     h1.innerText = "Mouse is here!"
// }

// function handleMouseLeave () {
//     h1.innerText = "Mouse is gone!"
// }

// function handleWindowResize () {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy () {
//     alert("copier!");
// }

// function handleWindowOffline () {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline () {
//     alert("All Good");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


//3.6 CSS in Javascript
const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//     if (h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
//  } 


function handleTitleClick(){
    const clickedClass = "clicked";
   if (h1.className === clickedClass) {
    h1.className = "";
   } else {
    h1.className = clickedClass;
   }
}

h1.addEventListener("click", handleTitleClick);

