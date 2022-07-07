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
