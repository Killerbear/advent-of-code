function solve2022Day8Task1(inputString) {
    let rows = inputString.split("\n");
    let grid = [];
    let visibleTreesGrid = [];
    let visibleTreesCount = (rows.length - 1) * 4;

    rows.map((row, rowIndex) => {
        grid.push([]);
        visibleTreesGrid.push([]);
        row.split("").map((col, colIndex) => {
            grid[rowIndex].push([]);
            visibleTreesGrid[rowIndex].push([]);
            visibleTreesGrid[rowIndex][colIndex] = 0;
            grid[rowIndex][colIndex] = col;
        });
    });

    // left and right view
    for (let row = 1; row < rows.length - 1; row++) {
        let highestTreeLeft = grid[row][0];
        let highestTreeRight = grid[row][rows.length - 1];
        for (let col = 1; col < rows.length - 1; col++) {
            if (grid[row][col] > highestTreeLeft) {
                highestTreeLeft = grid[row][col];
                visibleTreesGrid[row][col] = 1;
            }
            if (grid[row][rows.length - 1 - col] > highestTreeRight) {
                highestTreeRight = grid[row][rows.length - 1 - col];
                visibleTreesGrid[row][rows.length - 1 - col] = 1;
            }
        }
    }

    // top and bottom view
    for (let col = 1; col < rows.length - 1; col++) {
        let highestTreeTop = grid[0][col];
        let highestTreeBottom = grid[rows.length - 1][col];
        for (let row = 1; row < rows.length - 1; row++) {
            if (grid[row][col] > highestTreeTop) {
                highestTreeTop = grid[row][col];
                visibleTreesGrid[row][col] = 1;
            }
            if (grid[rows.length - 1 - row][col] > highestTreeBottom) {
                highestTreeBottom = grid[rows.length - 1 - row][col];
                visibleTreesGrid[rows.length - 1 - row][col] = 1;
            }
        }
    }

    return visibleTreesCount + visibleTreesGrid.flat().reduce((sum, tree) => sum + tree);
}
