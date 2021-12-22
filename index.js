let input = document.getElementById('input');
let output = document.getElementById('output');

document.getElementById("day1task1-button").onclick = function() {
    output.value = solveDay1Task1(input.value);
}

document.getElementById("day1task2-button").onclick = function() {
    output.value = solveDay1Task2(input.value);
}
