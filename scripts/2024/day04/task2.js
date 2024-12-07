function solve2024Day04Task2(inputString) {
    let letter = inputString.split("\n").map((line) => line.split(""));
    let xmasCounter = 0;

    console.log("-------------------");
    for (let index_letter = 0; index_letter < letter.length - 2; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 2; index_char++) {
            if (
                letter[index_letter][index_char] === "M" &&
                letter[index_letter + 1][index_char + 1] === "A" &&
                letter[index_letter + 2][index_char + 2] === "S" &&
                letter[index_letter][index_char + 2] === "M" &&
                letter[index_letter + 2][index_char] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("-------------------");
    for (let index_letter = 0; index_letter < letter.length - 2; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 2; index_char++) {
            if (
                letter[index_letter][index_char] === "M" &&
                letter[index_letter + 1][index_char + 1] === "A" &&
                letter[index_letter + 2][index_char + 2] === "S" &&
                letter[index_letter][index_char + 2] === "S" &&
                letter[index_letter + 2][index_char] === "M"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("-------------------");
    for (let index_letter = 0; index_letter < letter.length - 2; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 2; index_char++) {
            if (
                letter[index_letter][index_char] === "S" &&
                letter[index_letter + 1][index_char + 1] === "A" &&
                letter[index_letter + 2][index_char + 2] === "M" &&
                letter[index_letter][index_char + 2] === "M" &&
                letter[index_letter + 2][index_char] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("-------------------");
    for (let index_letter = 0; index_letter < letter.length - 2; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 2; index_char++) {
            if (
                letter[index_letter][index_char] === "S" &&
                letter[index_letter + 1][index_char + 1] === "A" &&
                letter[index_letter + 2][index_char + 2] === "M" &&
                letter[index_letter][index_char + 2] === "S" &&
                letter[index_letter + 2][index_char] === "M"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    return xmasCounter;
}
