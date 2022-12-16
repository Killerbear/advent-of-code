let visitedTailPositions = new Map();
let knots = [];
let ropeLength = 10;

function solve2022Day09Task2(inputString) {
    let moves = [];
    visitedTailPositions = new Map();
    knots = [...Array(ropeLength)].map(() => Array(2).fill(0));

    inputString.split("\n").map((move, index) => {
        moves[index] = move.split(" ");
        moves[index][1] = parseInt(moves[index][1], 10);
    });

    moves.map((move) => {
        for (let moveCount = 0; moveCount < move[1]; moveCount++) {
            moveHeadingKnot(move[0]);
            knots.forEach((knot, index) => {
                if (index < knots.length - 1) {
                    moveKnot(index + 1);
                }
            });
        }
    });

    return visitedTailPositions.size;
}

function moveHeadingKnot(move) {
    if (move[0] === "R") {
        knots[0][0]++;
    }
    if (move[0] === "L") {
        knots[0][0]--;
    }
    if (move[0] === "U") {
        knots[0][1]++;
    }
    if (move[0] === "D") {
        knots[0][1]--;
    }
}

function moveKnot(index) {
    let [leadX, leadY] = knots[index - 1];
    let [tailX, tailY] = knots[index];

    if (Math.abs(tailX - leadX) > 1 || Math.abs(tailY - leadY) > 1) {
        knots[index][0] = tailX - leadX === 0 ? tailX : tailX - (tailX - leadX) / Math.abs(tailX - leadX);
        knots[index][1] = tailY - leadY === 0 ? tailY : tailY - (tailY - leadY) / Math.abs(tailY - leadY);
    }

    if (index === knots.length - 1) {
        visitedTailPositions.set(`${knots[index][0]},${knots[index][1]}`, true);
    }
}
