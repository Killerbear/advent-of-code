let schematicsLines = [];
let stringLength = 0;

function solve2023Day03Task1(inputString) {
    schematicsLines = inputString.split("\n");
    stringLength = schematicsLines[0].length;
    let validNumbers = [];

    schematicsLines.forEach((line, lineIndex) => {
        const regex = /\d+/g;
        let numbers = line.matchAll(regex);
        [...numbers].forEach((number) => {
            if (hasAdjacentSymbol(number, lineIndex)) {
                validNumbers.push(Number(number));
            }
        });
    });

    return validNumbers.reduce((sum, number) => sum + number);
}

function hasAdjacentSymbol(number, lineIndex) {
    const symbolsRegex = /[^\d|^.]+/g;
    let top = false;
    let right = false;
    let bottom = false;
    let left = false;

    // check for symbol to the left
    if (number.index !== 0) {
        const search = schematicsLines[lineIndex].slice(number.index - 1, number.index).match(symbolsRegex);
        left = !!search;
    }

    // check for symbol to the right
    if (number.index + number.toString().length !== stringLength) {
        const search = schematicsLines[lineIndex]
            .slice(number.index + number.toString().length, number.index + number.toString().length + 1)
            .match(symbolsRegex);
        right = !!search;
    }

    // check for symbols on top
    if (lineIndex !== 0) {
        const start = number.index === 0 ? 0 : number.index - 1;
        const end =
            number.index + number.toString().length === stringLength
                ? number.index + number.toString().length
                : number.index + number.toString().length + 1;

        const search = schematicsLines[lineIndex - 1].slice(start, end).match(symbolsRegex);
        top = !!search;
    }

    // // check for symbols below
    if (lineIndex !== schematicsLines.length - 1) {
        const start = number.index === 0 ? 0 : number.index - 1;
        const end =
            number.index + number.toString().length === stringLength
                ? number.index + number.toString().length
                : number.index + number.toString().length + 1;

        const search = schematicsLines[lineIndex + 1].slice(start, end).match(symbolsRegex);
        bottom = !!search;
    }

    return top || right || bottom || left;
}
