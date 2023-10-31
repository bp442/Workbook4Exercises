"use strict";

//added names to each vehicle so that I can point to individual vehicles for each prompt
let vehicles = [
    {
        name: "Sally",
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        name: "Bob",
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        name: "Daniel",
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        name: "Angelica",
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        name: "Monica",
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        name: "Eliza",
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        name: "Jordan",
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        name: "Michael",
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

let vehicleNum = vehicles.length;
let redCars = [];
let expiredReg = [];
let min6Cap = [];
let plateEnd222 = [];
let todaysDate = new Date();

for (let i = 0; i < vehicleNum; i++) {
    if(vehicles[i].color == "Red"){
        redCars.push(vehicles[i].name);
    }
    if(vehicles[i].registrationExpires <= todaysDate){
        expiredReg.push(vehicles[i].name);
    }
    if(vehicles[i].capacity >= 6){
        min6Cap.push(vehicles[i].name);
    }
    if(vehicles[i].licenseNo.substring((vehicles[i].licenseNo.indexOf("-")+1)) == "222"){
        plateEnd222.push(vehicles[i].name);
    }
}

console.log("The vehicles that are red belong to: ");
for(let i=0; i < redCars.length; i++){
    console.log(redCars[i]);
}

console.log("The vehicles that have registrations that are expired belong to:");
for(let i=0; i < expiredReg.length; i++){
    console.log(expiredReg[i]);
}

console.log("The vehicles that can hold at least 6 people belong to:")
for(let i=0; i < min6Cap.length; i++){
    console.log(min6Cap[i]);
}

console.log("The vehicles that have license plates that end with \"222\" belong to:")
for(let i=0; i < plateEnd222.length; i++){
    console.log(plateEnd222[i]);
}