function split(str) {
    let pattern = /[\s(),;.]+/g;
    let result = str.split(pattern);
    console.log(result.join('\n'));
}
console.log(split('let sum = 4 * 4,b = "wow";'));