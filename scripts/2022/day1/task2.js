function solve2022Day1Task2(inputString) {
    let elvesGroup = inputString.split("\n\n");
    let caloriesSums = new Array(elvesGroup.length);
    let elves = new Array(elvesGroup.length);

    for (let i = 0; i < elvesGroup.length; i++) {
        elves[i] = elvesGroup[i].split("\n").map((item) => parseInt(item, 10));
    }

    elves.forEach((supplies, index) => {
        caloriesSums[index] = supplies.reduce((sum, calories) => sum + calories);
    });

    caloriesSums.sort((a, b) => b - a);
    return caloriesSums[0] + caloriesSums[1] + caloriesSums[2];
}
