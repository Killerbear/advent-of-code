function solve2021Day2Task2(inputString) {
    let depth = 0;
    let position = 0;
    let aim = 0;

    let commands = inputString.split("\n");

    commands.forEach((commandValues) => {
        let commandValuesArray = commandValues.split(" ");
        let command = commandValuesArray[0];
        let value = parseInt(commandValuesArray[1], 10);

        switch (command) {
            case "forward":
                position += value;
                depth += value * aim;
                break;
            case "up":
                aim -= value;
                break;
            case "down":
                aim += value;
                break;
        }
    });

    return depth * position;
}
