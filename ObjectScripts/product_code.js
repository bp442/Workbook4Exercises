"use strict";

function parsePartCode(code){
    let dash = Number(code.indexOf("-"));
    let colon = Number(code.indexOf(":"));

    let productCode = {
        supplierCode : code.substring(0, colon),
        productNumber : code.substring(colon+1, dash),
        size : code.substring((dash+1))

    };

    return productCode;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode);
console.log("Product Number: " + part1.productNumber);
console.log("Size: " + part1.size);
