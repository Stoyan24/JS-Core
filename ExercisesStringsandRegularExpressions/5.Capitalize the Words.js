function upper(words) {
    let splited = words.split(' ');
    let total = [];

    for(let el of splited){
        let result1 =  el[0].toUpperCase();
        let result2 = el.substr(1).toLowerCase();
        result = result1 + result2;
        total.push(result);
    }
    return total.join(' ');
}
console.log(upper('Wat that Easy? tRY thIs onE for SiZe!'));