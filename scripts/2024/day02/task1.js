function solve2024Day02Task1(inputString) {
    let saveLevels = 0;
    let inputLines = inputString.split("\n").map((report) => report.split(" "));
    inputLines
        .map((level) => level.map((value) => parseInt(value, 10)))
        .forEach((level) => {
            if (calculateSaveLevel(level)) {
                saveLevels++;
            }
        });

    return saveLevels;
}

function calculateSaveLevel(level) {
    let increasing = true;
    let decreasing = true;
    let saveDistance = true;

    level.reduce((accumulator, currentValue) => {
        if (Math.abs(accumulator - currentValue) > 3 || Math.abs(accumulator - currentValue) === 0) {
            saveDistance = false;
        }
        if (accumulator <= currentValue) {
            decreasing = false;
        }
        if (accumulator >= currentValue) {
            increasing = false;
        }
        return currentValue;
    });

    return (increasing || decreasing) && saveDistance;
}
