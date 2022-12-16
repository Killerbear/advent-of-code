function solve2022Day10Task2(inputString) {
    let registerX = 1;
    let cycle = 0;
    let screen = "";

    inputString.split("\n").map((instruction) => {
        addCycle();
        if (instruction !== "noop") {
            let [, value] = instruction.split(" ");
            addCycle();
            registerX += parseInt(value);
        }
    });

    console.log(screen);
    return screen;

    function addCycle() {
        drawPixel();
        cycle++;
        if (cycle === 40) {
            cycle = 0;
            screen += "\n";
        }
    }

    function drawPixel() {
        screen += cycle >= registerX - 1 && cycle <= registerX + 1 ? "#" : "_";
    }
}
