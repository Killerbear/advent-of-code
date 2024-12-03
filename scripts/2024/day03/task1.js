function solve2024Day03Task1(inputString) {
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    return inputString
        .match(regex)
        .map((mul) =>
            mul
                .match(/\d+/g)
                .map((num) => parseInt(num))
                .reduce((acc, cur) => acc * cur)
        )
        .reduce((acc, cur) => acc + cur);
}
