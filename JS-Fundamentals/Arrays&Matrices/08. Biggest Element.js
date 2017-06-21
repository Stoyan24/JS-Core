function solver(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(c =>biggest = Math.max(biggest,c)));
    console.log(biggest);
}
console.log(solver([[20, 50, 10],[8, 33, 145]]));