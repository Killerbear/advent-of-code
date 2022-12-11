let visitedPosition2 = new Map();
let headKnot = [];
let tailKnot = [];

function solve2022Day9Task2(inputString) {
    let moves = [];

    inputString.split("\n").map((move, index) => {
        moves[index] = move.split(" ");
        moves[index][1] = parseInt(moves[index][1], 10);
    });

    let maxGridSize = moves
        .map((move) => move[1])
        .sort((a, b) => a - b)
        .pop();
    maxGridSize = parseInt(maxGridSize, 10);

    headKnot = [maxGridSize, maxGridSize];
    tailKnot = [maxGridSize, maxGridSize];

    moves.map((move) => {
        for (let moveCount = 0; moveCount < move[1]; moveCount++) {
            moveHead(move[0]);
            moveKnot(headKnot, tailKnot);
        }
    });

    let tailMovesGrid = new Array(maxGridSize);
    tailMovesGrid.map((moves, index) => {
        let array = new Array(maxGridSize);
        array.map((item, index) => (array[index] = "."));
        tailMovesGrid[index].push(array);
    });
    return visitedPosition2.size;
}

function xDistance([x1, y1], [x2, y2]) {
    return x1 - x2;
}

function yDistance([x1, y1], [x2, y2]) {
    return y1 - y2;
}

function moveHead(move) {
    if (move[0] === "R") {
        headKnot[0]++;
    }
    if (move[0] === "L") {
        headKnot[0]--;
    }
    if (move[0] === "U") {
        headKnot[1]++;
    }
    if (move[0] === "D") {
        headKnot[1]--;
    }
}

function moveKnot(leadingKnot, tailingKnot) {
    if (xDistance(leadingKnot, tailingKnot) >= 2) {
        tailingKnot[1] = leadingKnot[1];
        tailingKnot[0] = leadingKnot[0] - 1;
    }

    if (xDistance(leadingKnot, tailingKnot) <= -2) {
        tailingKnot[1] = leadingKnot[1];
        tailingKnot[0] = leadingKnot[0] + 1;
    }

    if (yDistance(leadingKnot, tailingKnot) >= 2) {
        tailingKnot[0] = leadingKnot[0];
        tailingKnot[1] = leadingKnot[1] - 1;
    }

    if (yDistance(leadingKnot, tailingKnot) <= -2) {
        tailingKnot[0] = leadingKnot[0];
        tailingKnot[1] = leadingKnot[1] + 1;
    }
    visitedPosition2.set(`${tailingKnot[0]},${tailingKnot[1]}`, true);
}
