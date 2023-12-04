function solve2023Day04Task2(inputString) {
    const cards = inputString.split("\n");
    let cardCopyCount = [...new Array(cards.length)];
    cardCopyCount.forEach((card, index) => (cardCopyCount[index] = 1));

    cards.forEach((card, index) => {
        let cardToCopyIndex = index;
        const [winningNumbersString, myNumbersString] = card.split(" | ");
        let [, winningNumbers] = winningNumbersString.split(":");
        winningNumbers = winningNumbers.split(" ").filter(Boolean);

        myNumbersString
            .split(" ")
            .filter(Boolean)
            .forEach((number) => {
                if (winningNumbers.includes(number)) {
                    cardToCopyIndex++;
                    cardCopyCount[cardToCopyIndex] += cardCopyCount[index];
                }
            });
    });

    return cardCopyCount.reduce((sum, number) => sum + number);
}
