// =========== DATA STRUCTURES ========== >
// Arrays
// var menu = [
//   "shrimp",
//   "octopus",
//   "squid",
//   "sea urchin",
//   "albacore",
//   "yellow tail",
//   "fatty tuna",
// ];
// Objects
var menu = {
  shrimp: 0.75,
  octopus: 1.25,
  squid: 1.25,
  "sea urchin": 2.5,
  albacore: 2.5,
  "yellow tail": 1.25,
  "fatty tuna": 3.0,
  tuna: 1.25,
};

// console.log(menu["sea urchin"]);
// for (var i in menu) {
//   console.log("Menu Item " + i + ": " + menu[i]);
// }

// =========== CONDITIONALS ========== >

// =========== SUSHI-GO-ROUND, PT. 2 ========== >
var dishes = ["tuna", "shrimp", "albacore", "fatty tuna", "tuna", "squid"];
var dishes2 = ["tuna", "tuna", "tuna", "fatty tuna", "tuna", "tuna"];
var bills = [dishes, dishes2];
function dishTotal(customer) {
  var total = 0;
  for (var i = 0; i < customer.length; i++) {
    total += menu[customer[i]];
  }
  console.log("Your total bill is $" + total + ". Have a great day!");
}
