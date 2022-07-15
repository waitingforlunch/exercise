const a = 34;
const b = 2;
let myName = "boa";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName); 

myName = "nicolas";

console.log("your new name is" + myName);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]);

// Before adding sunday
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

//after adding sunday
console.log(daysOfWeek);

//object 
const player = {
    name: "junyeob",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
console.log(player);

console.log(player);
player.lastName = "kim";
console.log(player);


//funtion 함수
function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();

const player2 = {
    name: "yoonjin",
    sayHello: function (name) {
        console.log("hello!" + name);
    }
}
player2.sayHello("yoonjion");


const month = {
    name: "May",
    daysInMonth: 31,
    daysInWeek: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    indexOfFirstDate: 6,
    getDayOfDate: function (date) {
        namuzi = date % 7;
        console.log(this.daysInWeek[(this.indexOfFirstDate + namuzi) % 7]);
    }
}

month.getDayOfDate(20);
