function solve2015Day1Task1(inputString) {
    let solution = 0;

    inputString.split("").map((char) => (solution = char === "(" ? solution + 1 : solution - 1));

    return solution;
}
