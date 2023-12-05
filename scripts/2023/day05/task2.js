function solve2023Day05Task2(inputString) {
    const stringLines = inputString.split("\n");
    let seeds = [];
    let hashMapName = "";
    let lowesLocation = 1000000000000000;

    let maps = {
        seed_to_soil: [],
        soil_to_fertilizer: [],
        fertilizer_to_water: [],
        water_to_light: [],
        light_to_temperature: [],
        temperature_to_humidity: [],
        humidity_to_location: [],
    };

    stringLines.forEach((line, index) => {
        if (index === 0) {
            seeds = line
                .split(":")[1]
                .split(" ")
                .filter(Boolean)
                .map((number) => Number(number));
            return;
        }

        if (line.includes(":")) {
            hashMapName = line.trim().split(" ")[0].replaceAll("-", "_");
            return;
        }

        if (line !== "") {
            maps[hashMapName].push(line.split(" ").map((number) => Number(number)));
        }
    });

    for (let i = 0; i < seeds.length / 2; i++) {
        const start = seeds[i * 2];
        const range = seeds[i * 2 + 1];
        const [range1] = divideNumber(range);

        const start1 = start;
        const end1 = start + range1;
        const start2 = end1 + 1;
        const end2 = start + range;

        const worker1 = new Worker("./scripts/2023/day05/worker.js");
        worker1.addEventListener("message", (e) => {
            const location = e.data;
            if (location < lowesLocation) {
                lowesLocation = location;
            }
            console.log(lowesLocation);
        });
        worker1.postMessage({ maps, start: start1, end: end1 });

        const worker2 = new Worker("./scripts/2023/day05/worker.js");
        worker2.addEventListener("message", (e) => {
            const location = e.data;
            if (location < lowesLocation) {
                lowesLocation = location;
            }
            console.log(lowesLocation);
        });
        worker2.postMessage({ maps, start: start2, end: end2 });
    }

    // return lowesLocation;
}

function divideNumber(number) {
    if (number % 2 === 0) {
        return [number / 2, number / 2 + 1];
    } else {
        return [Math.floor(number / 2), Math.floor(number / 2) + 1];
    }
}
