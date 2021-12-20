let fs = require("fs");
let text = fs.readFileSync("./day1/day1part1input.txt").toString();
let depthMeasurementsInput = text.split("\n").map(Number)


function checkIfDepthIncreased(previousDepthValue, currentDepthValue) {
    return previousDepthValue < currentDepthValue
}

function addTogetherAllTheIncreases(depthMeasurements, increasesCounter = 0) {
    for (let i=0; i<=depthMeasurements.length; i++) {
        checkIfDepthIncreased(depthMeasurements[i] + depthMeasurements[i+1] + depthMeasurements[i+2], 
            depthMeasurements[i+1] + depthMeasurements[i+2] + depthMeasurements[i+3]) && increasesCounter++ 
    }    
    return increasesCounter
}


console.log(addTogetherAllTheIncreases(depthMeasurementsInput))
