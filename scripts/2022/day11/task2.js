let monkeys2 = [];

function solve2022Day11Task2(inputString) {
    let turns = 20;
    monkeys2 = [];

    inputString
        .split("Monkey")
        .splice(1)
        .map((monkeyInput) => {
            monkeys2.push(new Monkey(monkeyInput.substring(monkeyInput.indexOf("Starting"))));
        });

    let denominator = monkeys2.map((monkey) => monkey.testDivisor).reduce((sum, divisor) => sum * divisor);
    monkeys2.map((monkey) => (monkey.denominator = denominator));

    for (let i = 0; i < turns; i++) {
        monkeys2.forEach((monkey, index) => {
            monkey.throwItems();
        });
        console.log("------------------");
        console.log(`Round ${i + 1}`);
        monkeys2.forEach((monkey, index) => {
            console.log(`Monkey ${index}: ${monkey.items}`);
            console.log(`Monkey ${index}: ${monkey.inspections}`);
        });
    }

    console.log(monkeys2.map((monkey) => monkey.inspections));

    return monkeys2
        .map((monkey) => monkey.inspections)
        .sort((a, b) => a - b)
        .splice(-2)
        .reduce((sum, inspection) => sum * inspection);
}

class Monkey {
    items = [];
    operation = "";
    operationValue = "";
    testDivisor = 0;
    targets = [];
    inspections = 0;
    denominator = 0;

    constructor(input) {
        input
            .trim()
            .split("\n")
            .map((inputLine, index) => {
                switch (index) {
                    case 0:
                        this.setStartingItems(inputLine);
                        break;
                    case 1:
                        this.setOperation(inputLine);
                        break;
                    case 2:
                        this.setTestDivisor(inputLine);
                        break;
                    case 3:
                        this.setTarget(inputLine);
                        break;
                    case 4:
                        this.setTarget(inputLine);
                        break;
                }
            });
    }

    setStartingItems(input) {
        this.items = input
            .substring(input.indexOf(":") + 1)
            .split(",")
            .map((item) => parseInt(item.trim()));
    }

    setOperation(input) {
        let operationString = input.substring(input.indexOf("= old") + 6);
        this.operation = operationString[0];
        this.operationValue = operationString.substring(2);
    }

    setTestDivisor(input) {
        this.testDivisor = parseInt(input.split(" ").pop());
    }

    setTarget(input) {
        this.targets.push(parseInt(input[input.length - 1]));
    }

    throwItems() {
        this.items.map((item) => {
            this.inspections++;
            let worryLevel = this.calculateWorryLevel(item);
            if (worryLevel % this.testDivisor === 0) {
                monkeys2[this.targets[0]].items.push(worryLevel);
            } else {
                monkeys2[this.targets[1]].items.push(worryLevel);
            }
        });
        this.items = [];
    }

    calculateWorryLevel(item) {
        let operationValue = this.operationValue === "old" ? item : parseInt(this.operationValue);
        let newWorryLevel = 0;

        switch (this.operation) {
            case "+":
                newWorryLevel = item + operationValue;
                break;
            case "*":
                newWorryLevel = item * operationValue;
        }

        console.log(newWorryLevel % this.denominator === 0);
        newWorryLevel = newWorryLevel % this.denominator === 0 ? newWorryLevel / this.denominator : newWorryLevel;
        return newWorryLevel;
    }
}
