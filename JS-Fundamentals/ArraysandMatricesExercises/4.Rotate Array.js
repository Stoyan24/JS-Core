function rotate(arr) {
    let rotations = Number(arr.pop());
    let result = arr;
    for (let i = 1; i <= rotations%arr.length; i++) {
        let last = arr.pop();
        result.unshift(last);
    }
    console.log(result.join(' '));
}
console.log(rotate(['1','2','3','4','2']));