let stackCount = 0;
let stack = [];

function solve2022Day5Task1(inputString) {
    let stackInput = inputString.slice(0, inputString.indexOf("1"));
    let procedures = "m" + inputString.slice(inputString.indexOf("move") + 1);

    createStack(stackInput);
    moveCrane(procedures);

    return stack.map((stack) => stack[stack.length - 1]).join("");
}

function createStack(input) {
    input.split("\n").map((line, index) => {
        if (index === 0) {
            stackCount = (line.length + 1) / 4;
            stack = [...new Array(stackCount)].map(() => new Array(0));
        }
        for (let i = 0; i < stackCount; i++) {
            let crate = line.slice(1 + 4 * i, 2 + 4 * i);
            if (crate !== " " && crate !== "") {
                stack[i].unshift(crate);
            }
        }
    });
}

function moveCrane(procedures) {
    procedures.split("\n").map((procedure) => {
        let [empty1, count, empty2, from, empty3, to] = procedure.split(" ");
        for (let i = 0; i < count; i++) {
            stack[to - 1].push(stack[from - 1].pop());
        }
    });
}
