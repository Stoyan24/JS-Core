function table(text) {
    let towns = [];
    let sum = 0;
    for(let line of text){
        let townNames = line.split('|');
        let trimedNames = townNames[1].trim();
        let incomes = Number(townNames[2].trim());
        towns.push(trimedNames);
        sum += incomes;
    }
    console.log(towns.join(', ')+'\n'+sum);
}