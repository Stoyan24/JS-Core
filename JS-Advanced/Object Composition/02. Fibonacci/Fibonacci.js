function getFibNums(num) {
    let fibNum = (function () {
        let f1 = 0;
        let f2 = 1;
        return () => {
            let numToReturn = f1 + f2;
            f1 = f2;
            f2 = numToReturn;
            return numToReturn
        }
    })();
    let fibNumbers = [1];
    for (let i = 0; i < num - 1; i++) {
        fibNumbers.push(fibNum())
    }
    return fibNumbers}

