function trueOrFalseMatrix(matrix) {

    let result1 = 0;
    let result2 = 0;
    for(let row = 0; row < 1; row++) {
        for (let col = 0; col < 1; col++) {
            result1 += matrix[row][col];
            result2 += matrix[col][row];
        }

    }
    if(result1 === result2){
        console.log('true');
    }else{
        console.log('false')
    }
}
console.log(trueOrFalseMatrix(
    [[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]));
