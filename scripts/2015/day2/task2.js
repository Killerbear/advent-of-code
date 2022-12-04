function solve2015Day2Task2(inputString) {
    let solution = 0;

    inputString.split("\n").map((present) => {
        let dimensions = present
            .split("x")
            .map((dimension) => parseInt(dimension, 10))
            .sort((a, b) => a - b);
        solution += (dimensions[0] + dimensions[1]) * 2 + dimensions.reduce((sum = 1, side) => sum * side);
    });

    return solution;
}
