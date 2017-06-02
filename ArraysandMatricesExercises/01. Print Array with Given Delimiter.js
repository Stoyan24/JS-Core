function delimetar(arr) {
    let symbol = arr.pop();
    let result = arr.join(symbol);
    console.log(result);

}
console.log(delimetar(['One','Two','Three','Four','Five','-']));