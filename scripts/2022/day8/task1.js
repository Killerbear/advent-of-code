function solve2022Day8Task1(inputString) {
    let rows = inputString.split("\n");
    let grid = [];
    let visibleGrid = [];
    let visibleTreesCount = (rows.length - 1) * 4;

    rows.map((row, rowIndex) => {
        grid.push([]);
        visibleGrid.push([]);
        row.split("").map((col, colIndex) => {
            grid[rowIndex].push([]);
            visibleGrid[rowIndex].push([]);
            visibleGrid[rowIndex][colIndex] = 0;
            grid[rowIndex][colIndex] = col;
        });
    });

    console.log(grid);
    console.log(visibleGrid);

    for (let i = 1; i < rows.length - 1; i++) {
        let highestTree = grid[i][0];
        for (let j = 1; j < rows.length - 1; j++) {
            if (grid[i][j] > highestTree) {
                highestTree = grid[i][j];
                visibleGrid[i][j] = 1;
            }
        }
    }

    for (let i = 1; i < rows.length - 1; i++) {
        let highestTree = grid[0][i];
        for (let j = 1; j < rows.length - 1; j++) {
            if (grid[j][i] > highestTree) {
                highestTree = grid[j][i];
                visibleGrid[j][i] = 1;
            }
        }
    }

    for (let i = 1; i < rows.length - 1; i++) {
        let highestTree = grid[i][rows.length - 1];
        for (let j = rows.length - 2; j > 0; j--) {
            if (grid[i][j] > highestTree) {
                highestTree = grid[i][j];
                visibleGrid[i][j] = 1;
            }
        }
    }

    for (let i = 1; i < rows.length - 1; i++) {
        let highestTree = grid[rows.length - 1][i];
        for (let j = rows.length - 2; j > 0; j--) {
            if (grid[j][i] > highestTree) {
                highestTree = grid[j][i];
                visibleGrid[j][i] = 1;
            }
        }
    }

    console.log(visibleGrid);
    console.log(visibleGrid.flat().reduce((sum, tree) => sum + tree));
    return visibleTreesCount + visibleGrid.flat().reduce((sum, tree) => sum + tree);
}
