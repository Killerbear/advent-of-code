let stackCount2 = 0;
let stack2 = [];

function solve2022Day05Task2(inputString) {
    let stackInput = inputString.slice(0, inputString.indexOf("1"));
    let procedures = "m" + inputString.slice(inputString.indexOf("move") + 1);

    createStack(stackInput);
    moveCrane(procedures);

    return stack2.map((stack) => stack[0]).join("");
}

function createStack(input) {
    input.split("\n").map((line, index) => {
        if (index === 0) {
            stackCount2 = (line.length + 1) / 4;
            stack2 = [...new Array(stackCount2)].map(() => new Array(0));
        }
        for (let i = 0; i < stackCount2; i++) {
            let crate = line.slice(1 + 4 * i, 2 + 4 * i);
            if (crate !== " " && crate !== "") {
                stack2[i].push(crate);
            }
        }
    });
}

function moveCrane(procedures) {
    procedures.split("\n").map((procedure) => {
        let [empty1, count, empty2, from, empty3, to] = procedure.split(" ");
        stack2[to - 1].unshift(...stack2[from - 1].splice(0, count));
    });
}
