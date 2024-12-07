function solve2024Day04Task1(inputString) {
    let letter = inputString.split("\n").map((line) => line.split(""));
    let xmasCounter = 0;

    console.log("horizontal forward search");
    for (let index_letter = 0; index_letter < letter.length; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 3; index_char++) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter][index_char + 1] === "M" &&
                letter[index_letter][index_char + 2] === "A" &&
                letter[index_letter][index_char + 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("horizontal backward search");
    for (let index_letter = 0; index_letter < letter.length; index_letter++) {
        for (let index_char = letter[index_letter].length - 1; index_char > 2; index_char--) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter][index_char - 1] === "M" &&
                letter[index_letter][index_char - 2] === "A" &&
                letter[index_letter][index_char - 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("vertical forward search");
    for (let index_letter = 0; index_letter < letter.length - 3; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length; index_char++) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter + 1][index_char] === "M" &&
                letter[index_letter + 2][index_char] === "A" &&
                letter[index_letter + 3][index_char] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("vertical backward search");
    for (let index_letter = letter.length - 1; index_letter > 2; index_letter--) {
        for (let index_char = 0; index_char < letter[index_letter].length; index_char++) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter - 1][index_char] === "M" &&
                letter[index_letter - 2][index_char] === "A" &&
                letter[index_letter - 3][index_char] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("schräg runter rechts search");
    for (let index_letter = 0; index_letter < letter.length - 3; index_letter++) {
        for (let index_char = 0; index_char < letter[index_letter].length - 3; index_char++) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter + 1][index_char + 1] === "M" &&
                letter[index_letter + 2][index_char + 2] === "A" &&
                letter[index_letter + 3][index_char + 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("schräg runter link search");
    for (let index_letter = 0; index_letter < letter.length - 3; index_letter++) {
        for (let index_char = letter[index_letter].length - 1; index_char > 2; index_char--) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter + 1][index_char - 1] === "M" &&
                letter[index_letter + 2][index_char - 2] === "A" &&
                letter[index_letter + 3][index_char - 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("schräg hoch rechts search");
    for (let index_letter = letter.length - 1; index_letter > 2; index_letter--) {
        for (let index_char = 0; index_char < letter[index_letter].length - 3; index_char++) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter - 1][index_char + 1] === "M" &&
                letter[index_letter - 2][index_char + 2] === "A" &&
                letter[index_letter - 3][index_char + 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    console.log("schräg hoch links search");
    for (let index_letter = letter.length - 1; index_letter > 2; index_letter--) {
        for (let index_char = letter[index_letter].length - 1; index_char > 2; index_char--) {
            if (
                letter[index_letter][index_char] === "X" &&
                letter[index_letter - 1][index_char - 1] === "M" &&
                letter[index_letter - 2][index_char - 2] === "A" &&
                letter[index_letter - 3][index_char - 3] === "S"
            ) {
                xmasCounter++;
                console.log(index_letter, index_char);
            }
        }
    }

    return xmasCounter;
}
