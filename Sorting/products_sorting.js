"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Fishcakes", price: 1.49 },
    { product: "Peach Rings", price: 4.99 },
    { product: "Gumballs", price: 0.50 },
    { product: "Slim Jim", price: 1.75 },
];

products.sort(function(a, b){
    if (a.product < b.product) return -1;
    else if(a.product == b.product) return 0;
    else return 1;
})

for(let i = 0; i < products.length; i++){
    console.log(products[i].product);
}

console.log("------------------");

products.sort(function(a, b){
    if (b.price < a.price) return -1;
    else if(b.price == a.price) return 0;
    else return 1;
})

for(let i = 0; i < products.length; i++){
    console.log(products[i].price);
}