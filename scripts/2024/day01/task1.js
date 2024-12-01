function solve2024Day01Task1(inputString) {
    let result = 0;
    let leftList = [];
    let rightList = [];
    inputString.split("\n").map((locationPair) => {
        let locations = locationPair.split("   ");
        leftList.push(parseInt(locations[0], 10));
        rightList.push(parseInt(locations[1], 10));
    });

    leftList.sort();
    rightList.sort();

    leftList.forEach((location, index) => (result += Math.abs(location - rightList[index])));

    return result;
}
