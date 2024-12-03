function solve2024Day03Task2(inputString) {
    let removeElements = false;
    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
    let matches = inputString.match(regex);
    matches.forEach((match, index) => {
        if (match === "do()") {
            removeElements = false;
            matches[index] = "##removed##";
        }
        if (removeElements) {
            matches[index] = "##removed##";
        }
        if (match === "don't()") {
            removeElements = true;
            matches[index] = "##removed##";
        }
    });
    return multiply(matches.filter((match) => match !== "##removed##"));
}

function multiply(array) {
    return array
        .map((mul) =>
            mul
                .match(/\d+/g)
                .map((num) => parseInt(num))
                .reduce((acc, cur) => acc * cur)
        )
        .reduce((acc, cur) => acc + cur);
}
