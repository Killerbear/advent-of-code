function solve2023Day06Task1(inputString) {
    const stringLines = inputString.split("\n");
    const times = stringLines[0]
        .split(":")[1]
        .split(" ")
        .filter(Boolean)
        .map((number) => Number(number));

    const distances = stringLines[1]
        .split(":")[1]
        .split(" ")
        .filter(Boolean)
        .map((number) => Number(number));

    const winningRacesCount = [];
    for (let i = 0; i < times.length; i++) {
        winningRacesCount.push(0);
    }

    times.forEach((time, index) => {
        console.log("Race " + index);
        for (let i = 1; i < time; i++) {
            const raceDistance = i * (time - i);
            console.log(
                `holdTime: ${i}, raceTime: ${time - i}, raceDistance: ${raceDistance}, maxDistance: ${distances[index]}`
            );
            if (raceDistance > distances[index]) {
                winningRacesCount[index]++;
            }
        }
    });

    return winningRacesCount.reduce((sum, count) => sum * count);
}
