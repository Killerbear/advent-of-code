function solve2024Day01Task2(inputString) {
    let result = 0;
    let leftList = [];
    let rightList = [];
    inputString.split("\n").map((locationPair) => {
        let locations = locationPair.split("   ");
        leftList.push(parseInt(locations[0], 10));
        rightList.push(parseInt(locations[1], 10));
    });

    result += leftList
        .map((location) => location * countOccurrences(rightList, location))
        .reduce((sum, value) => sum + value, 0);

    return result;
}

function countOccurrences(array, number) {
    return array.reduce((count, currentNumber) => {
        return currentNumber === number ? count + 1 : count;
    }, 0);
}
