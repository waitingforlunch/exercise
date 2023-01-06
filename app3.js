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

const calculator = {
    plus: function (a , b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a **b;
    }
}

const PlusResult = calculator.plus (5, 10);
const MinusResult = calculator.minus (PlusResult, 4);
const TimesResult = calculator.times (MinusResult, 5);
const DivideResult = calculator.divide (TimesResult, MinusResult);
const PowerResult = calculator.power (DivideResult, 2)




