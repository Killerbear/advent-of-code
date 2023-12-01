function solve2023Day01Task2(inputString) {
    let result = 0;
    let inputLines = inputString.split("\n");
    inputLines.forEach((input) => {
        let replacedInput = replaceWordsWithNumber(input);
        let numbers = extractNumbers(replacedInput).join("").split("");
        let number = `${numbers[0]}${numbers[numbers.length - 1]}`;
        result += Number(number);
    });

    return result;
}

function replaceWordsWithNumber(string) {
    return string
        .replaceAll(/one/gi, "o1e")
        .replaceAll(/two/gi, "t2o")
        .replaceAll(/three/gi, "t3e")
        .replaceAll(/four/gi, "f4r")
        .replaceAll(/five/gi, "f5e")
        .replaceAll(/six/gi, "s6x")
        .replaceAll(/seven/gi, "s7n")
        .replaceAll(/eight/gi, "e8t")
        .replaceAll(/nine/gi, "n9e");
}

function extractNumbers(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    return matches ? matches.map(Number) : [];
}
