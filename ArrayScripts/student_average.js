"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

for(let x = 0; x < students.length; x++){
    let name = students[x].name;
    let sumScores = 0;

    for(let y = 0; y < students[x].scores.length; y++){
        sumScores += students[x].scores[y];
    }

    let average = sumScores / students[x].scores.length;

    console.log(students[x].name + " got an average of " + average.toFixed(2));
    
}