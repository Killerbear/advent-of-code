let visitedPosition = new Map();
let headPosition = [];
let tailPosition = [];

function solve2022Day09Task1(inputString) {
    let moves = [];
    headPosition = [0, 0];
    tailPosition = [0, 0];
    visitedPosition = new Map();

    inputString.split("\n").map((move, index) => {
        moves[index] = move.split(" ");
        moves[index][1] = parseInt(moves[index][1], 10);
    });

    moves.map((move) => {
        for (let moveCount = 0; moveCount < move[1]; moveCount++) {
            moveHead(move[0]);
            moveTail();
        }
    });

    return visitedPosition.size;
}

function xDistance([x1, y1], [x2]) {
    return x1 - x2;
}

function yDistance([x1, y1], [, y2]) {
    return y1 - y2;
}

function moveHead(move) {
    if (move[0] === "R") {
        headPosition[0]++;
    }
    if (move[0] === "L") {
        headPosition[0]--;
    }
    if (move[0] === "U") {
        headPosition[1]++;
    }
    if (move[0] === "D") {
        headPosition[1]--;
    }
}

function moveTail() {
    if (xDistance(headPosition, tailPosition) >= 2) {
        tailPosition[1] = headPosition[1];
        tailPosition[0] = headPosition[0] - 1;
    }

    if (xDistance(headPosition, tailPosition) <= -2) {
        tailPosition[1] = headPosition[1];
        tailPosition[0] = headPosition[0] + 1;
    }

    if (yDistance(headPosition, tailPosition) >= 2) {
        tailPosition[0] = headPosition[0];
        tailPosition[1] = headPosition[1] - 1;
    }

    if (yDistance(headPosition, tailPosition) <= -2) {
        tailPosition[0] = headPosition[0];
        tailPosition[1] = headPosition[1] + 1;
    }
    visitedPosition.set(`${tailPosition[0]},${tailPosition[1]}`, true);
}
