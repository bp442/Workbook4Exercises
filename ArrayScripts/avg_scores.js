"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

 function getAverage(scores){
    let total = 0;
    let numScores = scores.length;
    for (let x = 0; x < numScores; x++){
        total += scores[x];
    }


    return (total/numScores);
 }

 console.log("My average is : " + getAverage(myScores));
 console.log("Your average is : " + getAverage(yourScores));