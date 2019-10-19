function makeCubes(quantity) {
	let matches = 0;

	for (let cubes = 0; cubes != quantity; cubes++) {
		if (cubes == 0) {
			matches += 4 * 3;
			continue;
		}
		matches += 4 * 2;
	}

	return matches;
}

alert(makeCubes(2))