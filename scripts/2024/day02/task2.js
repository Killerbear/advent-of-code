function solve2024Day02Task2(inputString) {
    let saveLevels = 0;
    let inputLines = inputString.split("\n").map((report) => report.split(" "));
    inputLines
        .map((level) => level.map((value) => parseInt(value, 10)))
        .forEach((level) => {
            let isSaveLevel = false;

            for (let i = 0; i < level.length; i++) {
                if (calculateSaveLevel([...level].filter((value, index) => index !== i))) {
                    isSaveLevel = true;
                }
            }

            if (isSaveLevel) {
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
