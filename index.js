let input = document.getElementById('input');
let output = document.getElementById('output');

document.getElementById("day1task1").onclick = function() {
    output.value = solveDay1Task1(input.value);
}

document.getElementById("day1task2").onclick = function() {
    output.value = solveDay1Task2(input.value);
}

document.getElementById("day2task1").onclick = function() {
    output.value = solveDay2Task1(input.value);
}

document.getElementById("day2task2").onclick = function() {
    output.value = solveDay2Task2(input.value);
}
