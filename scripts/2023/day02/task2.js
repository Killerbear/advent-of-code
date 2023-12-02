function solve2023Day02Task2(inputString) {
    let powersSum = 0;
    let games = inputString.split("\n");

    games.forEach((gameString) => {
        let [, game] = gameString.split(":");
        let max = initHashMap();

        game.split(";")
            .map((set) => set.split(",").map((value) => value.trim()))
            .flat()
            .map((cubes) => {
                const [number, color] = cubes.split(" ");
                if (Number(number) > max.get(color)) {
                    max.set(color, number);
                }
            });

        powersSum += max.get("red") * max.get("green") * max.get("blue");
    });

    return powersSum;
}

function initHashMap() {
    const map = new Map();
    map.set("red", 0);
    map.set("green", 0);
    map.set("blue", 0);
    return map;
}
