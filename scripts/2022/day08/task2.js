function solve2022Day08Task2(inputString) {
    let rows = inputString.split("\n");
    let grid = [];
    let scenicScoreGrid = [];

    rows.map((row, rowIndex) => {
        grid.push([]);
        scenicScoreGrid.push([]);
        row.split("").map((col, colIndex) => {
            grid[rowIndex].push([]);
            scenicScoreGrid[rowIndex].push([]);
            scenicScoreGrid[rowIndex][colIndex] = 0;
            grid[rowIndex][colIndex] = col;
        });
    });

    for (let row = 0; row < rows.length; row++) {
        for (let col = 0; col < rows.length; col++) {
            let tree = grid[row][col];
            let score = [0, 0, 0, 0];
            // left trees
            for (let colCompare = col - 1; colCompare >= 0; colCompare--) {
                let compareTree = grid[row][colCompare];
                score[0] += 1;
                if (tree <= compareTree) {
                    break;
                }
            }
            // top trees
            for (let rowCompare = row - 1; rowCompare >= 0; rowCompare--) {
                let compareTree = grid[rowCompare][col];
                score[1] += 1;
                if (tree <= compareTree) {
                    break;
                }
            }
            // right trees
            for (let colCompare = col + 1; colCompare < rows.length; colCompare++) {
                let compareTree = grid[row][colCompare];
                score[2] += 1;
                if (tree <= compareTree) {
                    break;
                }
            }
            // bottom trees
            for (let rowCompare = row + 1; rowCompare < rows.length; rowCompare++) {
                let compareTree = grid[rowCompare][col];
                score[3] += 1;
                if (tree <= compareTree) {
                    break;
                }
            }
            scenicScoreGrid[row][col] = score.reduce((sum, value) => sum * value);
        }
    }

    return scenicScoreGrid
        .flat()
        .sort((a, b) => a - b)
        .pop();
}
