let gridSize = 1000;
let visitedPosition = new Map();
let movesGrid = [...Array(gridSize)].map(() => Array(gridSize).fill("."));
let headPosition = [500, 500];
let tailPosition = [500, 500];
let loopIteration = 0;

function solve2022Day09Task1animated(inputString) {
    let moves = [];

    inputString.split("\n").map((move, index) => {
        moves[index] = move.split(" ");
        moves[index][1] = parseInt(moves[index][1], 10);
    });

    let movesArray = [];

    moves.map((move) => {
        for (let moveCount = 0; moveCount < move[1]; moveCount++) {
            movesArray.push(move[0]);
        }
    });

    myLoop(movesArray);

    visitedPosition.forEach((value, key) => {
        let [x, y] = key.split(",");
        movesGrid[gridSize - 1 - y][x] = "#";
    });

    return visitedPosition.size;
}

function xDistance([x1, y1], [x2]) {
    return x1 - x2;
}

function yDistance([x1, y1], [, y2]) {
    return y1 - y2;
}

function myLoop(movesArray) {
    setTimeout(() => {
        moveHead(movesArray[loopIteration]);
        moveTail();
        loopIteration++;
        if (loopIteration < movesArray.length - 1) {
            myLoop(movesArray);
        }
    }, 0);
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
    // drawGrid();
}

function drawGrid() {
    console.clear();
    let movesGrid = [...Array(gridSize)].map(() => Array(gridSize).fill("."));
    movesGrid[gridSize - 1 - headPosition[1]][headPosition[0]] = "H";
    movesGrid[gridSize - 1 - tailPosition[1]][tailPosition[0]] = "T";
    movesGrid.map((moves) => console.log(moves));
}
