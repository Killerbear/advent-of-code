function solve2022Day4Task2(inputString) {
    let solution = 0;
    let assignments = inputString
        .split("\n")
        .map((pair) => pair.split(","))
        .flat();
    for (let i = 0; i < assignments.length; i = i + 2) {
        let [min1, max1] = assignments[i].split("-").map((sectionId) => parseInt(sectionId, 10));
        let [min2, max2] = assignments[i + 1].split("-").map((sectionId) => parseInt(sectionId, 10));
        if ((max1 >= min2 && min1 <= min2) || (max2 >= min1 && min2 <= min1)) {
            solution++;
        }
    }
    return solution;
}
