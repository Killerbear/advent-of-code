function solveDay1Task1(inputString) {
    let solution = 0;

    let depthsArray = inputString.split("\n").map(function(item) {
        return parseInt(item, 10);
    });

    depthsArray.map((number,index,array) => {index > 0 && number > array[index -1] ? solution++ : null});

    return solution;
}


