function solve2023Day06Task2(inputString) {
    const stringLines = inputString.split("\n");
    const time = Number(stringLines[0].split(":")[1].split(" ").filter(Boolean).join(""));
    const distance = Number(stringLines[1].split(":")[1].split(" ").filter(Boolean).join(""));

    const min = 1;

    let isFinished = false;
    let index = min;
    let lostRaces = 0;

    while (!isFinished) {
        const raceDistance = index * (time - index);
        if (raceDistance > distance) {
            isFinished = !isFinished;
        } else {
            lostRaces++;
        }
        index++;
    }

    return time - lostRaces * 2 - 1;
}
