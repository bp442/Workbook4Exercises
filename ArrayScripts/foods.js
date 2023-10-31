"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function getMealCost(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for (let i = 0; i < numOrders; i++) {
        sum += orders[i].price;
    }
    return sum;
}

let mealCost = getMealCost(lunch);
let tip = (mealCost * 0.18).toFixed(2);
let tax = (mealCost * 0.08).toFixed(2);
console.log("My subtotal was $" + mealCost);
console.log("The 18% tip I included was $" + tip);
console.log("The 8% tax was $" + tax);

