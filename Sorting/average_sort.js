"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100];

function getAverage(scores) {
    let total = 0;
    let numScores = scores.length;
    for (let x = 0; x < numScores; x++) {
        total += scores[x];
    }


    return (total / numScores);
}

console.log("My average is : " + getAverage(myScores));
console.log("Your average is : " + getAverage(yourScores));
console.log("--------------------------------------");
function sortScores(a, b) {
    return a - b;
}
function getMedian(scores) {
    scores.sort(sortScores);
    let length = scores.length;
    let median = 0;

    if (length % 2 != 0) {
        median = scores[(length/2)-0.5];
        return median;
    }
    else {
        median = (scores[length/2 - 1] + scores[(length/2)]) / 2;
        return median;
    }
}

console.log("The median of my scores was :" + getMedian(myScores));
console.log("The median of your scores was : " + getMedian(yourScores));