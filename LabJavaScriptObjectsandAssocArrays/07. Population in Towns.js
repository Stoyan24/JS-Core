function solve(input) {
    "use strict";
    let map = new Map();
    for (let i = 0; i<input.length; i++) {
        let [town, pop] = input[i].split(' <-> ');
        if(!map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + Number(pop));
    }

    [...map].forEach(([town, pop]) => console.log(`${town} : ${pop}`));

}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'

]);