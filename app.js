// const a = 5;
// const b = 2;
// const myName = "claire";

// console.log (a + b);
// console.log (a * b);
// console.log ("hello" + myName)

// myName = "claire Kim";
// console.log ("hello" + myName)

// const amIFat = null;
// let something;

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

// //Get item from array
// console.log(daysOfWeek[5])

// //add one more day to the array
// daysOfWeek.push("sun")

// console.log(daysOfWeek)

// const player = {
//     name:"claire",
//     points: 10,
//     fat: true,
// }

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false

// function sayHello(nameOfPerson, age) {
//     console.log("hello my name is " + nameOfPerson + "and I am " + age);
// }

// sayHello("claire", 20);
// sayHello("junyeob", 30);

// function plus(a, b) {
//     console.log (a + b);
// }

// plus(8, 60);

// const player = {
//     name: "claire",
//     sayHello: function (otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you")
//     },
// }

// player.sayHello("jun");
// player.sayHello("dal");

// const calculator = {
//     plus: function (a , b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     times: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     },
//     power: function (a, b) {
//         return a **b;
//     }
// }

// const PlusResult = calculator.plus (5, 10);
// const MinusResult = calculator.minus (PlusResult, 4);
// const TimesResult = calculator.times (MinusResult, 5);
// const DivideResult = calculator.divide (TimesResult, MinusResult);
// const PowerResult = calculator.power (DivideResult, 2)

//여기서부트는 3.5 강의 까지 내용
// const title = document.querySelector(".hello h1");

// function handleTitleClick(){
//     title.style.color = "blue";
// }

// function handleMouseEnter(){
//     title.innerText = "Mouse is here";
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowOffline(){
//     alert("SOS no wifi");
// }

// function handleWindowOnline(){
//     alert("Online!")
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//여기서부터 3.6 강의

const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//    if (h1.style.color === "blue") {
//     h1.style.color = "tomato";
//    } else {
//     h1.style.color = "blue";
//    }
// }

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor
//  }

// h1.addEventListener("click", handleTitleClick);

//3.7 css in javascript 

const h1 = document.querySelector(".hello h1");

unction handleTitleClick(){
    h1.className = "active";
 }

h1.addEventListener("click", handleTitleClick);