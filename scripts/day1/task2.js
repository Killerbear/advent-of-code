function solveDay1Task2(inputString) {
    let solution = 0;
    let sumsOfMeasurements = [];

    let numberArray = inputString.split("\n").map(function(item) {
        return parseInt(item, 10);
    });

    numberArray.forEach((number,index) => {
        sumsOfMeasurements.push(index < numberArray.length-2 ? number + numberArray[index+1] + numberArray[index+2] : null);
    })

    sumsOfMeasurements.map((value,index,array) => {index > 0 && value > array[index -1] ? solution++ : null});

    return solution;
}


