function solve(str) {
    let startingYield = Number(str);
    if(startingYield < 100){
        console.log(0);
        console.log(0);
    }
    else {


        let yield = 0;
        let days = 0;
        while (startingYield >= 100) {
            yield -= startingYield - 26;
            startingYield -= 10;
            days++;
        }
        console.log(days);
        if (startingYield == 0) {
            console.log(0);
        } else {
            console.log(Math.abs(yield+26));

        }
    }
}
solve('111');
//function solve([startingYield]) {
//startingYield = Number(startingYield);
//let total = 0;
//let c = 0;
//
//while(startingYield >= 100) {
//    c++;
//    total += startingYield;
//    startingYield -= 10;
//    total -= 26;
//}
//total -= 26;
//if (total < 0) total = 0;
//
//console.log(c);
//console.log(total);
//}