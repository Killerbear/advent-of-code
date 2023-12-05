self.addEventListener("message", (e) => {
    const { maps, start, end } = e.data;
    let lowesLocation = 1000000000000000;
    console.log(start, end);

    for (let j = start; j < end; j++) {
        // if (!(j % 1_000_000)) {
        //     console.log(j);
        // }
        const soil = getMappedNumber(maps, "seed_to_soil", j);
        const fertilizer = getMappedNumber(maps, "soil_to_fertilizer", soil);
        const water = getMappedNumber(maps, "fertilizer_to_water", fertilizer);
        const light = getMappedNumber(maps, "water_to_light", water);
        const temperature = getMappedNumber(maps, "light_to_temperature", light);
        const humidity = getMappedNumber(maps, "temperature_to_humidity", temperature);
        const location = getMappedNumber(maps, "humidity_to_location", humidity);
        if (location < lowesLocation) {
            lowesLocation = location;
        }
    }

    self.postMessage(lowesLocation);
});

function getMappedNumber(maps, map, number) {
    let mappedNumber = number;
    maps[map].forEach(([destination, source, range]) => {
        const isInRange = number >= source && number <= source + range - 1;
        if (isInRange) {
            mappedNumber = number + (destination - source);
        }
    });

    return mappedNumber;
}
