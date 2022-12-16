const Combinations2 = new Map();

function solve2022Day02Task2(inputString) {
    setAllPossibleCombination2();
    let solution = 0;
    let games = inputString.split("\n");

    games.forEach((game) => (solution += Combinations2.get(game)));
    return solution;
}

function setAllPossibleCombination2() {
    Combinations2.set("A X", 3);
    Combinations2.set("A Y", 4);
    Combinations2.set("A Z", 8);
    Combinations2.set("B X", 1);
    Combinations2.set("B Y", 5);
    Combinations2.set("B Z", 9);
    Combinations2.set("C X", 2);
    Combinations2.set("C Y", 6);
    Combinations2.set("C Z", 7);
}
