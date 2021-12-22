function solveDay1Task1(inputString) {
    let solution = 0;

    let numberArray = inputString.split("\n").map(function(item) {
        return parseInt(item, 10);
    });

    numberArray.map((number,index,array) => {index > 0 && number > array[index -1] ? solution++ : null});

    return solution;
}


