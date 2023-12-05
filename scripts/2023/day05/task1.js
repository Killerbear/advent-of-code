let maps = {};

function solve2023Day05Task1(inputString) {
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
            seeds = line.split(":")[1].split(" ").filter(Boolean);
            return;
        }

        if (line.includes(":")) {
            hashMapName = line.trim().split(" ")[0].replaceAll("-", "_");
            return;
        }

        if (line !== "") {
            maps[hashMapName].push(line.split(" "));
        }
    });

    seeds.forEach((seed) => {
        const soil = getMappedNumber("seed_to_soil", Number(seed));
        const fertilizer = getMappedNumber("soil_to_fertilizer", soil);
        const water = getMappedNumber("fertilizer_to_water", fertilizer);
        const light = getMappedNumber("water_to_light", water);
        const temperature = getMappedNumber("light_to_temperature", light);
        const humidity = getMappedNumber("temperature_to_humidity", temperature);
        const location = getMappedNumber("humidity_to_location", humidity);
        // console.log("seed: " + seed + " location: " + location);
        lowesLocation = location < lowesLocation ? location : lowesLocation;
    });

    // console.log(seeds);
    // console.log(maps);
    // console.log(lowesLocation);

    return lowesLocation;
}

function getMappedNumber(map, number) {
    let mappedNumber = number;
    maps[map].forEach(([destination, source, range]) => {
        destination = Number(destination);
        source = Number(source);
        range = Number(range);
        // console.log(destination, source, range, number);
        const isInRange = number >= source && number <= source + range - 1;
        if (isInRange) {
            mappedNumber = number + (destination - source);
        }
    });

    return mappedNumber;
}
