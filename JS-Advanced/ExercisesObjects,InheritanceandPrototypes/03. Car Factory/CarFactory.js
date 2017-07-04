function assembleCars(carObj){
    let carToBuild = {
        model: carObj.model
    };
    let power = carObj.power;
    if (power <= 90)
        carToBuild.engine = {power: 90, volume: 1800};
    else if (power > 90 && power <= 120)
        carToBuild.engine = { power: 120, volume: 2400};
    else if (power > 120)
        carToBuild.engine = { power: 200, volume: 3500};

    let carriageType = carObj.carriage;
    if (carriageType == 'hatchback')
        carToBuild.carriage = { type: 'hatchback'};
    else if (carriageType == 'coupe')
        carToBuild.carriage = { type: 'coupe'};
    carToBuild.carriage.color = carObj.color

    let wheelsize = carObj.wheelsize;
    if (wheelsize % 2 == 0)
        wheelsize -= 1;
    carToBuild.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    return carToBuild
}
console.log(assembleCars({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));