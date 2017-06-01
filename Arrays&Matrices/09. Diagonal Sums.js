function sumDiagonal(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length-row-1];
    }
    console.log(firstSum + ' ' + secondSum);
}

console.log(sumDiagonal([
    [20, 40],
    [10, 60]]));