// VARIABLES and DATA TYPES
var greeting; // not assigned a value yet
console.log(greeting); // logs undefined

greeting = "Hello, world! Here's Johnny~!"; // string, designated double quotes or single quotes
// left-hand is the variable name, right-hand is the value being assigned

2, 4, 123, 0.76, 0.00001, -54, 0; // numbers

true, false; // booleans
// 0     1   2  3    4      5    6     7
var stuff = [greeting, 2, 4, 123, 0.76, true, null, undefined]; // arrays, collects data together
// console.log(stuff[5]);

var stuff = [greeting, 2, 4, 123, 0.76, true, null, undefined, "hello"];
stuff.push("dog");
stuff.pop();
console.log(stuff);

// console.log(stuff);
// undefined
// null
var blah = null; // NOT 0

// console.log(greeting);

// LOOPS

// for loop
for (var i = 0; i <= 20; i++) {
  console.log(i);
}

var i = 0;
var name = "Claire";
while (i < 20) {
  // do something
  console.log("Keep running!");
  if (name != "Bryan") {
    i++;
  }
}

// a. creating a variable as our starting point.
// b. ending statement. So long as "i" is less than the stopping value...
// c. the repetetive action.
// d. i is incremented by 1

// CONDITIONALS
// "7" == 7 ==> true
// "7" === 7 ==> false
var fav = 100; // one = is assigning value to variable

// if (fav == 7) {
//   // two = is comparing left and right
//   console.log("You won the roulette spin!");
// } else {
//   console.log("Wah wahhh~! You lost!");
// }

// SUSHI-GO-ROUND
var menu = [
  "tuna",
  "salmon",
  "sea urchin",
  "egg",
  "squid",
  "octopus",
  "fatty tuna",
  "yellow fin",
];

var dishes = ["tuna", "tuna", "squid", "fatty tuna", "tuna", "squid"];
// console.log(dishes.length); // 6
var total = 0;
for (var i = 0; i < dishes.length; i++) {
  if (dishes[i] == "tuna" || dishes[i] == "squid") {
    total = total + 2.5; // current value + new value
  } else {
    total = total + 1.5;
  }
}
console.log("Your total bill is $" + total + ". Have a great day!");

// total price


// 1. 

for(var num = 0; num < 15; num++){
  console.log(num);
}

// output: ???