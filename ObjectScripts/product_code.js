"use strict";

function parsePartCode(code){
    let productCode = {
        supplierCode : code.substring(0, code.indexOf(":")),
        productNumber : code.substring(code.indexOf(":")+1, code.indexOf("-")),
        size : code.substring(code.indexOf("-")+1)

    };

    return productCode;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode);
console.log("Product Number: " + part1.productNumber);
console.log("Size: " + part1.size);
