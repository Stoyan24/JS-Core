function isMagic(input) {
    let sumCol = [];
    let sumRow = [];
    let magicNum = input[0].reduce((a,b) => a + b);
    for (let row = 0; row < input.length; row++) {
        let sum = input[row].reduce((a,b) => a + b);
        if(magicNum != sum){
            return console.log(false);
        }
        sumRow.push(sum);
        for (let col = 0; col < input.length; col++) {
            if(sumCol[row] == null){
                sumCol[row] = 0;
            }
            sumCol[row] += input[row][col];
        }
        if(magicNum != sumCol[row]){
            return console.log(false);
        }
    }
    console.log(true);
}
console.log(isMagic(
        [[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]));
