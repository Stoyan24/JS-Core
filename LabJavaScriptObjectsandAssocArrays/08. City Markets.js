function solve(input) {
    let map = new Map();
    for (let tokens of input) {
        let [city, products, sum] = tokens.split(' -> ');
        let totalSum = sum.split(' : ').reduce((a,b)=> a*b);
        if(!map.has(city)) {
            map.set(city, new Map());
        }
        if (!map.get(city).has(products)) {
            map.get(city).set(products, 0);
        }
        let sales = map.get(city).get(products);
        map.get(city).set(products, sales + totalSum);


    }

    for (let [town, product] of map) {
        console.log('Town - ' + town);
        for (let p of product) {
            console.log(`$$$${p.join(' : ')}`);
        }
    }
    // console.log(map);
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);