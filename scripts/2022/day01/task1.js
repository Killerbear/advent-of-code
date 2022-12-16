function solve2022Day01Task1(inputString) {
    let solution = 0;
    let elvesGroup = inputString.split("\n\n");
    let elves = new Array(elvesGroup.length);

    for (let i = 0; i < elvesGroup.length; i++) {
        elves[i] = elvesGroup[i].split("\n").map((item) => parseInt(item, 10));
    }

    elves.forEach((supplies) => {
        let caloriesSum = supplies.reduce((sum, calories) => sum + calories);
        solution = caloriesSum > solution ? caloriesSum : solution;
    });

    return solution;
}
