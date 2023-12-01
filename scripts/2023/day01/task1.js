function solve2023Day01Task1(inputString) {
    let result = 0;
    let inputLines = inputString.split("\n");
    inputLines.forEach((input) => {
        let numbers = extractNumbers(input).join("").split("");
        let number = `${numbers[0]}${numbers[numbers.length - 1]}`;
        result += Number(number);
    });

    return result;
}

function extractNumbers(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}
