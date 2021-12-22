let input = document.getElementById('input');
let output = document.getElementById('output');

const buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.onclick = () => output.value = window[button.id](input.value)
}
