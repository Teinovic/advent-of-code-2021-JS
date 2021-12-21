let fs = require("fs");
let text = fs.readFileSync("./day2/input.txt").toString();
let puzzleInput = text.split("\n")


function calculateDepthAndHorizontalPositionMultiplied(input, aim = 0, depth = 0, horizontalPosition = 0) {
    for (let item of input) {
        if (item.includes('forward')) {
            horizontalPosition += Number(item.slice(-1))
            depth +=  aim * Number(item.slice(-1))
        }
        else if (item.includes('down')) {
            aim += Number(item.slice(-1))
        }
        else {
            aim -= Number(item.slice(-1))
        }
    }
    
    return depth * horizontalPosition
}

const result = calculateDepthAndHorizontalPositionMultiplied(puzzleInput)

console.log(result)