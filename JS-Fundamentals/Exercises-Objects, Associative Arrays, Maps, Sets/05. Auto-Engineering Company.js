function printCarOrder(cars) {

    let map = new Map();

    for (let i = 0; i < cars.length; i++) {
        let [brand, model, broi] = cars[i].split(' | ');
        broi = Number(broi);
        if(!map.has(brand)) {
            map.set(brand, new Map());
        }
        if(map.get(brand).get(model) == undefined) {
            map.get(brand).set(model, broi);
        } else {
            map.get(brand).set(model, map.get(brand).get(model) + broi);
        }


    }
    for (let [brand, inerMap] of map) {
        console.log(brand);
        for (let [model, broi] of inerMap) {
            console.log(`###${model} -> ${broi}`);
        }
    }

}

printCarOrder([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q7 | 1',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);