function solve2022Day6Task1(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (!/(.).*\1/.test(inputString.substring(i, i + 4))) {
            return i + 4;
        }
    }
}
