"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
    name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

let numMembers = academyMembers.length;
let member187;
let threeFilms = [];
let bobName = [];
let filmA = [];

for(let i = 0; i < numMembers; i++){
    if(academyMembers[i].memID == 187){
        member187 = academyMembers[i].name;
    }
    //if they have three or more films
    if(academyMembers[i].films.length >= 3){
        threeFilms.push(academyMembers[i].name);
    }
    //if the name contains "Bob"
    if(academyMembers[i].name.indexOf("Bob") !== -1){
        bobName.push(academyMembers[i].name);
    }
    //nested for loop to discover if they have any "A" films within their film list
    for(let y = 0; y < academyMembers[i].films.length; y++){
        if(academyMembers[i].films[y].indexOf("A") == 0){
            if(filmA[filmA.length-1] !== academyMembers[i].name){ //only push the name if they aren't already added
            filmA.push(academyMembers[i].name);
            }
        }
    }
}

console.log("The member whose ID is 187 is : " + member187);
console.log("The people that have been in at least 3 films are: ")
for(let i=0; i < threeFilms.length; i++){
    console.log(threeFilms[i]);
}
console.log("The people that have the name that starts with \"Bob\" are: ")
for(let i=0; i < bobName.length; i++){
    console.log(bobName[i]);
}
console.log("The Academy Members who have been in a film that starts with A are: ")
for(let i=0; i < filmA.length; i++){
    console.log(filmA[i]);
}