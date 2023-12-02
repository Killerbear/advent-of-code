function solve2023Day02Task1(inputString) {
    const givenMax = new Map();
    givenMax.set("red", 12);
    givenMax.set("green", 13);
    givenMax.set("blue", 14);
    let validGamesIdSum = 0;
    let games = inputString.split("\n");

    games.forEach((gameString) => {
        let isValidGame = true;

        let [id, game] = gameString.split(":");
        id = id.slice(5);

        game.split(";")
            .map((set) => set.split(",").map((value) => value.trim()))
            .flat()
            .map((cubes) => {
                const [number, color] = cubes.split(" ");
                if (Number(number) > givenMax.get(color)) {
                    isValidGame = false;
                }
            });

        if (isValidGame) {
            validGamesIdSum += Number(id);
        }
    });

    return validGamesIdSum;
}
