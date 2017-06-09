function solve(data) {
    let towns = {};
    for (let i = 0; i < data.length; i+=2) {
        let town = data[i];
        let value = Number(data[i+1])
        if(!towns.hasOwnProperty(town)){
            towns[town] = 0;
        }
        towns[town] += value;
    }
    console.log(JSON.stringify(towns));
}
