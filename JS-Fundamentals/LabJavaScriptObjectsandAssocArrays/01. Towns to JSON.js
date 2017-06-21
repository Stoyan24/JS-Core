function solve(arr) {
    arr.shift();
    let towns = [];
    for(let row of arr){
       let townTokens =  row.split('|').filter(el => el !== '').map(el => el.trim());
        let town = {Town: townTokens[0], Latitude: Number(townTokens[1]), Longitude: Number(townTokens[2])}
        towns.push(town);
    }
    console.log(JSON.stringify(towns));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);