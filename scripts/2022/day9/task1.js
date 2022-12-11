let visitedPosition = new Map();
let headPosition = [];
let tailPosition = [];

function solve2022Day9Task1(inputString) {
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

    headPosition = [maxGridSize, maxGridSize];
    tailPosition = [maxGridSize, maxGridSize];

    moves.map((move) => {
        for (let moveCount = 0; moveCount < move[1]; moveCount++) {
            moveHead(move[0]);
            moveTail();
        }
    });

    let tailMovesGrid = new Array(maxGridSize);
    tailMovesGrid.map((moves, index) => {
        let array = new Array(maxGridSize);
        array.map((item, index) => (array[index] = "."));
        tailMovesGrid[index].push(array);
    });
    return visitedPosition.size;
}

function xDistance([x1, y1], [x2, y2]) {
    return x1 - x2;
}

function yDistance([x1, y1], [x2, y2]) {
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
