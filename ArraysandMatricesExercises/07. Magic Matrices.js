function equal(matrix) {

    let result = 0;
    let sum = 0;
    for (let row = 0; row < matrix.length; row++) {
        sum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sum += matrix[row][col];
        }
    }
    console.log(sum);
    let sum2 = 0;
    for (let col = 0; col < matrix.length; col++) {
        sum2 = 0;
        for (let row = 0; row < matrix[col].length; row++) {
            sum2 += matrix[row][col];
        }
    }
    console.log(sum2);
    if(sum == sum2){
        console.log('true');
    }else {
        console.log('false');
    }

}
console.log(equal(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));