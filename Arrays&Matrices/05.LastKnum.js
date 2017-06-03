function printKNumbers(n, k) {
    let result = [1];
        for (let i = 0; i < n - 1; i++) {
            let newElement = 0;
            for (let j = k - 1; j >= 0; j--) {
                if (j <= i) {
                    newElement += result[i - j];
                }
            }
            result.push(newElement);
        }
        console.log(result.join(' '));
}
console.log(printKNumbers(6, 3));