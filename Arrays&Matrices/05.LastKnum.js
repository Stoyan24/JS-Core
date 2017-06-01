function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    let result = 0;
    for (let i = 1; i < n.length; i++) {
        let start = Math.max(0,i-k);
        let tempArray = seq.slice(start, start + n);
        result = tempArray.reduce((a, b)=>a + b);
    }
    console.log(result);

    }
console.log(sumLastKNumbersSequence(6, 3));