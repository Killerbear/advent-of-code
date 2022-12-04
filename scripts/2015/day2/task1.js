function solve2015Day2Task1(inputString) {
    let solution = 0;

    inputString.split("\n").map((present) => {
        let dimensions = present.split("x").map((dimension) => parseInt(dimension, 10));
        let sides = [dimensions[0] * dimensions[1], dimensions[0] * dimensions[2], dimensions[1] * dimensions[2]];
        solution += sides.reduce((sum, side) => sum + side) * 2 + Math.min(...sides);
    });

    return solution;
}
