function solve2015Day1Task2(inputString) {
    let solution = 0;
    let level = 0;

    inputString.split("").map((char, index) => {
        level = char === "(" ? level + 1 : level - 1;
        if (level === -1 && solution === 0) {
            solution = index + 1;
        }
    });

    return solution;
}
