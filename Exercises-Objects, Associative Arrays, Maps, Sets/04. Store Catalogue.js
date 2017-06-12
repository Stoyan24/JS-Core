function sortArray(input) {
    "use strict";
    input = input.sort();
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let alphabet = input[i][0];
        let arr = input[i].split(':').map(x=>x.trim());
        let outputArr = arr[0]+': ' + arr[1];


        if (!map.has(alphabet)) {
            map.set(alphabet, outputArr);
        } else {
            map.set(alphabet, map.get(alphabet) + ',' + outputArr);
        }
    }
    for (let [i,k] of map) {
        console.log(i);
        k.split(',').forEach(x=> console.log('  ' + x));
    }
}

sortArray([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

]);