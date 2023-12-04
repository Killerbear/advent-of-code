let schematicsLines = [];
let stringLength = 0;
let gearsWithAdjacentSymbol = new Map();

function solve2023Day03Task2(inputString) {
    gearsWithAdjacentSymbol = new Map();
    schematicsLines = inputString.split("\n");
    stringLength = schematicsLines[0].length;
    let sum = 0;

    schematicsLines.forEach((line, lineIndex) => {
        const regex = /\d+/g;
        let numbers = line.matchAll(regex);
        [...numbers].forEach((number) => {
            buildAdjacentSymbolTable(number, lineIndex);
        });
    });

    for (const [, gears] of gearsWithAdjacentSymbol.entries()) {
        if (gears.length === 2) {
            sum += gears[0] * gears[1];
        }
    }

    return sum;
}

function buildAdjacentSymbolTable(number, lineIndex) {
    const symbolsRegex = /[^\d|^.]+/g;

    // check for symbol to the left
    if (number.index !== 0) {
        const end = number.index;
        const start = end - 1;
        const search = schematicsLines[lineIndex].slice(start, end).match(symbolsRegex);
        if (search) {
            let numbers = gearsWithAdjacentSymbol.get(`${lineIndex},${start}`);
            if (numbers) {
                gearsWithAdjacentSymbol.set(`${lineIndex},${start}`, [...numbers, number[0]]);
            } else {
                gearsWithAdjacentSymbol.set(`${lineIndex},${start}`, [number[0]]);
            }
        }
    }

    // check for symbol to the right
    if (number.index + number.toString().length !== stringLength) {
        const start = number.index + number.toString().length;
        const end = start + 1;
        const search = schematicsLines[lineIndex].slice(start, end).match(symbolsRegex);
        if (search) {
            let numbers = gearsWithAdjacentSymbol.get(`${lineIndex},${start}`);
            if (numbers) {
                gearsWithAdjacentSymbol.set(`${lineIndex},${start}`, [...numbers, number[0]]);
            } else {
                gearsWithAdjacentSymbol.set(`${lineIndex},${start}`, [number[0]]);
            }
        }
    }

    // check for symbols on top
    if (lineIndex !== 0) {
        const start = number.index === 0 ? 0 : number.index - 1;
        const end =
            number.index + number.toString().length === stringLength
                ? number.index + number.toString().length
                : number.index + number.toString().length + 1;

        const search = schematicsLines[lineIndex - 1].slice(start, end).matchAll(symbolsRegex);
        const result = [...search];
        if (result.length) {
            let numbers = gearsWithAdjacentSymbol.get(`${lineIndex - 1},${start + result[0].index}`);
            if (numbers) {
                gearsWithAdjacentSymbol.set(`${lineIndex - 1},${start + result[0].index}`, [...numbers, number[0]]);
            } else {
                gearsWithAdjacentSymbol.set(`${lineIndex - 1},${start + result[0].index}`, [number[0]]);
            }
        }
    }

    // // check for symbols below
    if (lineIndex !== schematicsLines.length - 1) {
        const start = number.index === 0 ? 0 : number.index - 1;
        const end =
            number.index + number.toString().length === stringLength
                ? number.index + number.toString().length
                : number.index + number.toString().length + 1;

        const search = schematicsLines[lineIndex + 1].slice(start, end).matchAll(symbolsRegex);
        const result = [...search];
        if (result.length) {
            let numbers = gearsWithAdjacentSymbol.get(`${lineIndex + 1},${start + result[0].index}`);
            if (numbers) {
                gearsWithAdjacentSymbol.set(`${lineIndex + 1},${start + result[0].index}`, [...numbers, number[0]]);
            } else {
                gearsWithAdjacentSymbol.set(`${lineIndex + 1},${start + result[0].index}`, [number[0]]);
            }
        }
    }
}
