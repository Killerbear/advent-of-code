function solve2022Day12Task1(inputString) {
    let nodesGrid = new Map();
    let start;
    let goal;
    let shortestPath = [];

    let maxX = 0;
    let maxY = 0;

    setupNodesGrid();
    solveAStar();

    // console.log(nodesGrid);

    return shortestPath.length;

    function setupNodesGrid() {
        inputString.split("\n").map((instruction, indexY) => {
            instruction.split("").map((node, indexX) => {
                let currentNode = new Node();
                currentNode.height = node.charCodeAt(0);
                currentNode.x = indexX;
                currentNode.y = indexY;
                switch (node) {
                    case "S":
                        currentNode.height = "a".charCodeAt(0);
                        start = currentNode;
                        break;
                    case "E":
                        currentNode.height = "z".charCodeAt(0);
                        goal = currentNode;
                        break;
                }
                nodesGrid.set(`${indexX},${indexY}`, currentNode);

                maxX = maxX < indexX ? indexX : maxX;
            });
            maxY = maxY < indexY ? indexY : maxY;
        });

        for (let y = 0; y <= maxY; y++) {
            for (let x = 0; x <= maxX; x++) {
                let currentNode = nodesGrid.get(`${x},${y}`);
                if (x < maxX) {
                    currentNode.neighbors.push(nodesGrid.get(`${x + 1},${y}`));
                }
                if (x > 0) {
                    currentNode.neighbors.push(nodesGrid.get(`${x - 1},${y}`));
                }
                if (y < maxY) {
                    currentNode.neighbors.push(nodesGrid.get(`${x},${y + 1}`));
                }
                if (y > 0) {
                    currentNode.neighbors.push(nodesGrid.get(`${x},${y - 1}`));
                }
            }
        }
    }

    function solveAStar() {
        let openSet = [1];
        let closeSet = [];

        while (openSet.length) {
            let current = openSet.pop();
        }
    }

    function reconstructPath() {
        shortestPath.push(goal);
        let node = goal;
        while (!!node.parent) {
            shortestPath.push(node.parent);
            node = node.parent;
        }
    }
}

class Node {
    x = 0;
    y = 0;
    visited = false;
    height = 97;
    parent;
    neighbors = [];
    localScore = Infinity;
    globalScore = Infinity;

    calculateWeight() {}

    calculateDistance(a, b) {
        return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
    }
}
