function printElements(arr) {
    let lastElement = Number(arr.pop());
    for (let i = 0; i < arr.length; i+=lastElement) {
        console.log(arr[i]);
    }

}
console.log(printElements(['5', '20', '31', '4', '20', '2']));