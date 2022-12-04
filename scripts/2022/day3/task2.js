function solve2022Day3Task2(inputString) {
    let solution = 0;
    let rucksacks = inputString.split("\n");
    for (let i = 0; i < rucksacks.length; i = i + 3) {
        let rucksack1 = rucksacks[i].split("");
        let rucksack2 = rucksacks[i + 1].split("");
        let rucksack3 = rucksacks[i + 2].split("");
        let result = rucksack1.filter((item) => rucksack2.includes(item)).filter((item) => rucksack3.includes(item));
        let itemValue = result[0].charCodeAt(0) - 96;
        solution += itemValue < 0 ? result[0].charCodeAt(0) - 38 : itemValue;
    }
    return solution;
}
