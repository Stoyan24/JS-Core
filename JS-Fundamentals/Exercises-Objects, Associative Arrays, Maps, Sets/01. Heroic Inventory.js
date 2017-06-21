function solve(strArr) {
    let heroData = [];
    for (let i = 0; i < strArr.length; i++) {
        let heroArguments = strArr[i].split(' / ');
        let heroName = heroArguments[0];
        let heroLvl = heroArguments[1];
        let heroItems = [];
        if(heroArguments.length > 2){
            heroItems = heroArguments[2].split(', ')
        }
        let hero = {name: heroName, level: Number(heroLvl), items: heroItems};
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);