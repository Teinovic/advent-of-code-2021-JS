let fs = require("fs");
let text = fs.readFileSync("./day2/input.txt").toString();
let puzzleInput = text.split("\n")


function extractMoveTypeValuesIntoArray(input, moveType) {
    let moveTypeArray = []
    for (let word of input) word.includes(moveType) && moveTypeArray.push(Number(word.slice(-1)))
    return moveTypeArray
}

function addArrayMoveTypeValues(moveTypeArray) {
    let counter = 0
    for (let item of moveTypeArray) counter = counter + item
    return counter
}

console.log(addArrayMoveTypeValues(extractMoveTypeValuesIntoArray(puzzleInput, 'forward')) * 
            (addArrayMoveTypeValues(extractMoveTypeValuesIntoArray(puzzleInput, 'down')) - 
            addArrayMoveTypeValues(extractMoveTypeValuesIntoArray(puzzleInput, 'up')))
)

