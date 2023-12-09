let allSequences = [];

function solve2023Day09Task2(inputString) {
    allSequences = [];
    const historyLines = inputString.split("\n");
    let result = 0;

    for (const element of historyLines) {
        allSequences.push([]);
    }

    historyLines.forEach((history, index) => {
        const historyArray = history.split(" ").map((number) => Number(number));
        allSequences[index].push(historyArray);
        calculateSequence(historyArray, index);
    });

    allSequences.forEach((historySequence) => {
        if (historySequence.length === 2) {
            result += historySequence[0].slice(-1);
        } else {
            for (let i = historySequence.length - 3; i >= 0; i--) {
                const number = Number(historySequence[i].slice(0, 1)) - Number(historySequence[i + 1].slice(0, 1));
                historySequence[i].unshift(number);
                if (i === 0) {
                    result += number;
                }
            }
        }
    });

    return result;
}

function calculateSequence(sequence, index) {
    let isLastSequence = true;
    let newSequence = [];
    for (let i = 0; i < sequence.length - 1; i++) {
        const difference = sequence[i + 1] - sequence[i];
        newSequence[i] = difference;
        if (difference !== 0) {
            isLastSequence = false;
        }
    }

    allSequences[index].push(newSequence);

    if (!isLastSequence) {
        calculateSequence(newSequence, index);
    }
}
