function solveDay2Task1(inputString) {
    let depth = 0;
    let position = 0;

    let commands = inputString.split("\n");

    commands.forEach((commandValues) => {
        let commandValuesArray = commandValues.split(" ");
        let command = commandValuesArray[0];
        let value = parseInt(commandValuesArray[1], 10);

        switch (command) {
            case "forward": position += value;
            break;
            case "up": depth -= value;
            break;
            case "down": depth += value;
            break;
        }
    })

    return depth * position;
}


