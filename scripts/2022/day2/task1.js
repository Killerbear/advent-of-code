const Combinations1 = new Map();

function solve2022Day2Task1(inputString) {
    setAllPossibleCombination1();
    let solution = 0;
    let games = inputString.split("\n");

    games.forEach((game) => (solution += Combinations1.get(game)));
    return solution;
}

function setAllPossibleCombination1() {
    Combinations1.set("A X", 4);
    Combinations1.set("A Y", 8);
    Combinations1.set("A Z", 3);
    Combinations1.set("B X", 1);
    Combinations1.set("B Y", 5);
    Combinations1.set("B Z", 9);
    Combinations1.set("C X", 7);
    Combinations1.set("C Y", 2);
    Combinations1.set("C Z", 6);
}
