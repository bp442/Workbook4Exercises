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

let productNum = products.length;
let cheapCandies = [];
let candiesMnM = [];
let boolSwedishFish = false;
for (let i = 0; i < productNum; i++) {
    if(products[i].price < 4){
        cheapCandies.push(products[i].product);
    }
    if(products[i].product.indexOf("M&M") !== -1){
        candiesMnM.push(products[i].product);
    }
    if(products[i].product == "Swedish Fish"){
        boolSwedishFish = true;
    }
}

console.log("The candies that cost less than $4 are: ");
for(let i=0; i < cheapCandies.length; i++){
    console.log(cheapCandies[i]);
}
console.log("The candies that have M&M in its name are: ");
for(let i=0; i < candiesMnM.length; i++){
    console.log(candiesMnM[i]);
}

if(boolSwedishFish == true){
    console.log("We carry Swedish Fish");
}
else{
    console.log("We do not carry Swedish Fish");
}