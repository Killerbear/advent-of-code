let input = document.getElementById("input");
let output = document.getElementById("output");
const buttons = document.getElementsByTagName("button");
let scripts = [];

input.value = localStorage.getItem("puzzleInput");

for (let button of buttons) {
    button.onclick = () => {
        let src = generateSrc(button.id);
        addScriptAndStartCalculation(src, button.id);
    };
}

function generateSrc(id) {
    let year = id.slice(5, 9);
    let day = id.slice(12, 13);
    let task = id.slice(17, 18);
    return `./scripts/${year}/day${day}/task${task}.js`;
}

function addScriptAndStartCalculation(src, buttonId) {
    if (!scripts.includes(src)) {
        scripts.push(src);
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = function () {
            calculateOutput(buttonId);
        };
    } else {
        calculateOutput(buttonId);
    }
}

function calculateOutput(id) {
    output.value = window[id](input.value);
    localStorage.setItem("puzzleInput", input.value);
}
