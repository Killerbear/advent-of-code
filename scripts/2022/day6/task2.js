function solve2022Day6Task2(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (!/(.).*\1/.test(inputString.substring(i, i + 14))) {
            return i + 14;
        }
    }
}
