function getTypes(){
    let occurences = new Map;
    for (let arg of arguments){
        let type = typeof arg;
        console.log(type + ": " + arg);
        if (!occurences.has(type))
            occurences.set(type, 0);
        occurences.set(type, occurences.get(type) + 1);
    }
    let sortedResult = Array.from(occurences).sort((a,b) => b[1] - a[1]);
    for (let [type, count] of sortedResult){
        console.log(type + ' = ' + count)
    }
}