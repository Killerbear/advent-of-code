function solve2021Day3Task1(inputString) {
    let bits = inputString.split("\n");
    let gamma = new Array(bits[0].length).fill(0);
    let epsilon = new Array(bits[0].length).fill(0);

    bits.forEach((bit) => {
        let bitArray = bit.split("").map((bit) => parseInt(bit, 10));
        bitArray.map((bit, index) => (gamma[index] += bit));
    });

    gamma.map((sumOf1bits, index) => (gamma[index] = sumOf1bits > bits.length - sumOf1bits ? 1 : 0));
    gamma.map((bit, index) => (epsilon[index] = bit ? 0 : 1));

    return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
}
