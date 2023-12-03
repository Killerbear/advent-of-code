let schematicsLines = [];
let stringLength = 0;

function solve2023Day03Task2(inputString) {
    schematicsLines = inputString.split("\n");
    stringLength = schematicsLines[0].length;
    let validNumbers = [];

    schematicsLines.forEach((line, lineIndex) => {
        const regex = /\d+/g;
        let numbers = line.matchAll(regex);
        [...numbers].forEach((number) => {
            console.log(number[0], number.index, lineIndex);
            console.log(hasAdjacentSymbol(number, lineIndex));
            if (hasAdjacentSymbol(number, lineIndex)) {
                validNumbers.push(Number(number));
            }
        });
    });

    return validNumbers.reduce((sum, number) => sum + number);
}

function hasAdjacentSymbol(number, lineIndex) {
    // left: 1 nach links eine Nummer? dann alle Zahlen links von * suchen und die letzte Zahl nehmen
    // right: 1 nach rechts eine Nummer? dann alle Zahlen rechts von * suchen und die erste Zahl nehmen
    // top: alle zahlen top suchen und dann alle index mit dem index von * vergleichen
    // index von * muss zwischen zahl-start-index - 1 und zahl-end-index + 1 liegen
    // z.b. .222...
    //      ....*..
    // zahl-indexes=[0,4] *-index=4
    // also passt die Zahl

    const symbolsRegex = /[*]+/g;
    let top = false;
    let right = false;
    let bottom = false;
    let left = false;

    // check for symbol to the left
    if (number.index !== 0) {
        const search = schematicsLines[lineIndex].slice(number.index - 1, number.index).match(symbolsRegex);
        console.log("left: " + search);
        left = !!search;
    }

    // check for symbol to the right
    if (number.index + number.toString().length !== stringLength) {
        const search = schematicsLines[lineIndex]
            .slice(number.index + number.toString().length, number.index + number.toString().length + 1)
            .match(symbolsRegex);
        console.log("right: " + search);
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
        console.log("top: " + search);
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
        console.log("bottom: " + search);
        bottom = !!search;
    }

    return top || right || bottom || left;
}
