function concat(arr) {
    let result = Array.from(arr.join('')).reverse().join('');
    console.log(result);
}
concat(['I', 'am', 'student']);