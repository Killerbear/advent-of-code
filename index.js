let puzzles;
let scripts = [];
let input = document.getElementById("input");
let output = document.getElementById("output");
const solveButton = document.getElementById("solve-button");
const selects = document.getElementsByTagName("select");
const yearSelection = document.getElementById("year-selection");
const daySelection = document.getElementById("day-selection");

fetch("./puzzles.json")
    .then((response) => response.json())
    .then((data) => {
        puzzles = data;
        initializeApp();
    })
    .catch((error) => console.error("Error loading puzzles:", error));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const year = urlParams.get("year");
const day = urlParams.get("day");
const task = urlParams.get("task");

solveButton.onclick = () => {
    addScriptAndStartCalculation();
};

function initializeApp() {
    input.value = localStorage.getItem("puzzleInput");
    createPuzzleSelects();
    getAndSetUrlParams();
}

function createPuzzleSelects() {
    let yearSelect = document.createElement("select");
    yearSelect.id = "year-select";
    yearSelection.appendChild(yearSelect);

    let daySelect = document.createElement("select");
    daySelect.id = "day-select";
    daySelection.appendChild(daySelect);

    puzzles.map((puzzleYear) => {
        let currentYear = Object.keys(puzzleYear)[0];
        let option = document.createElement("option");
        option.text = currentYear;
        option.value = currentYear;
        selects[0].add(option);

        if (currentYear === year) {
            Object.values(puzzleYear)[0].map((puzzleDay) => {
                let option = document.createElement("option");
                option.text = ("0" + puzzleDay).slice(-2);
                option.value = ("0" + puzzleDay).slice(-2);
                selects[1].add(option);
            });
        }
    });
}

function getAndSetUrlParams() {
    selects[0].value = year;
    selects[1].value = day;
    selects[2].value = task;

    for (let select of selects) {
        select.onchange = () => {
            urlParams.set(select.id.split("-")[0], select.value);
            window.location.search = urlParams;
        };
    }
}

function addScriptAndStartCalculation() {
    let functionName = `solve${year}Day${day}Task${task}`;
    let src = `./scripts/${year}/day${day}/task${task}.js`;

    console.clear();
    if (!scripts.includes(src)) {
        scripts.push(src);
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);
        script.onload = function () {
            calculateOutput(functionName);
        };
    } else {
        calculateOutput(functionName);
    }
}

function calculateOutput(id) {
    output.value = window[id](input.value);
    localStorage.setItem("puzzleInput", input.value);
}
