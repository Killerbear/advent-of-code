function solve2021Day1Task2(inputString) {
    let solution = 0;
    let sumsOfMeasurements = [];

    let depthsArray = inputString.split("\n").map(item => parseInt(item, 10));

    depthsArray.forEach((number,index) =>
        sumsOfMeasurements.push(index < depthsArray.length-2 ? number + depthsArray[index+1] + depthsArray[index+2] : null)
    )

    sumsOfMeasurements.map((value,index,array) => index > 0 && value > array[index -1] ? solution++ : null);

    return solution;
}


