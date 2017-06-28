function reducer(numbers){
    numbers = numbers.map(Number);

    function customReduce(arr, func){
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }
    console.log(`Sum = ${customReduce(numbers, (a,b) => a + b)}`);
    console.log(`Min = ${customReduce(numbers, (a,b) => Math.min(a, b))}`);
    console.log(`Min = ${customReduce(numbers, (a,b) => Math.max(a, b))}`);
    console.log(`Product = ${customReduce(numbers, (a,b) => a * b)}`);
    console.log(`Join = ${customReduce(numbers, (a,b) => a.toString() + b.toString())}`);
}