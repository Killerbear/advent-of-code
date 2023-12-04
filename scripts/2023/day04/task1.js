function solve2023Day04Task1(inputString) {
    const cards = inputString.split("\n");
    let sumOfAllPoints = 0;

    cards.forEach((card, index) => {
        let pointsOfCard = 0;
        const [winningNumbersString, myNumbersString] = card.split(" | ");
        let [, winningNumbers] = winningNumbersString.split(":");
        winningNumbers = winningNumbers.split(" ").filter(Boolean);

        myNumbersString
            .split(" ")
            .filter(Boolean)
            .forEach((number) => {
                if (winningNumbers.includes(number)) {
                    pointsOfCard = !pointsOfCard ? 1 : pointsOfCard * 2;
                }
            });
        sumOfAllPoints += pointsOfCard;
    });

    return sumOfAllPoints;
}
