function solve2022Day3Task1(inputString) {
    let solution = 0;
    let rucksacks = inputString.split("\n");
    rucksacks.forEach((rucksack) => {
        let compartment1 = rucksack.slice(0, rucksack.length / 2).split("");
        let compartment2 = rucksack.slice(rucksack.length / 2, rucksack.length).split("");
        let result = compartment1.filter((item) => compartment2.includes(item));
        let itemValue = result[0].charCodeAt(0) - 96;
        solution += itemValue < 0 ? result[0].charCodeAt(0) - 38 : itemValue;
    });
    return solution;
}
