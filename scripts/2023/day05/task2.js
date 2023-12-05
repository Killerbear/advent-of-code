let maps = {};

function solve2023Day05Task2(inputString) {
    console.log("start");
    const stringLines = inputString.split("\n");
    let seeds = [];
    let hashMapName = "";
    let lowesLocation = 1000000000000000;

    maps = {
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
        const seed = seeds[i * 2];
        const seedRange = seeds[i * 2 + 1];
        console.log(seed);

        for (let j = seed; j < seed + seedRange; j++) {
            if (!Boolean(j % 1_000_000)) {
                console.log(j);
            }
            const soil = getMappedNumber("seed_to_soil", j);
            const fertilizer = getMappedNumber("soil_to_fertilizer", soil);
            const water = getMappedNumber("fertilizer_to_water", fertilizer);
            const light = getMappedNumber("water_to_light", water);
            const temperature = getMappedNumber("light_to_temperature", light);
            const humidity = getMappedNumber("temperature_to_humidity", temperature);
            const location = getMappedNumber("humidity_to_location", humidity);
            if (location < lowesLocation) {
                lowesLocation = location;
            }
        }
    }

    console.log("finish");
    return lowesLocation;
}

function getMappedNumber(map, number) {
    let mappedNumber = number;
    maps[map].forEach(([destination, source, range]) => {
        const isInRange = number >= source && number <= source + range - 1;
        if (isInRange) {
            mappedNumber = number + (destination - source);
        }
    });

    return mappedNumber;
}
