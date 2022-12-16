function solve2022Day10Task1(inputString) {
    let registerX = 1;
    let cycle = 0;
    let signalStrength = 0;

    inputString.split("\n").map((instruction) => {
        if (instruction === "noop") {
            addCycle();
        } else {
            let [, value] = instruction.split(" ");
            addCycle();
            addCycle();
            registerX += parseInt(value);
        }
    });

    return signalStrength;

    function addCycle() {
        cycle++;
        calculateSignalStrength();
    }

    function calculateSignalStrength() {
        if ((cycle - 20) % 40 === 0) {
            signalStrength += registerX * cycle;
        }
    }
}
