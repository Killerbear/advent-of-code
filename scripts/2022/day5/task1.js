function solve2022Day5Task1(inputString) {
    let solution = 0;
    let assignmentPairs = inputString.split("\n");
    let assignments = [];
    assignmentPairs.forEach((assignmentPair, index) => (assignments[index] = assignmentPair.split(",")));
    assignments = assignments.flat();
    for (let i = 0; i < assignments.length; i = i + 2) {
        let [min1, max1] = assignments[i].split("-").map((item) => parseInt(item, 10));
        let [min2, max2] = assignments[i + 1].split("-").map((item) => parseInt(item, 10));
        if ((min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1)) {
            solution++;
        }
    }
    return solution;
}
