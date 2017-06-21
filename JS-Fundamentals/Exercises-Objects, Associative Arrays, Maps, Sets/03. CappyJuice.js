function makeJuice(input) {
    let arr = {};
    let arrOver = {};
    let needsFruit =  1000;
    for (i=0; i< input.length; i++) {
        let [fruit, quantity] = input[i].split(' => ');
        if (!arr[fruit]) {
            arr[fruit] = Number(quantity);
        } else {
            arr[fruit] += Number(quantity);
        }
        if (arr[fruit] >=  1000) {
            arrOver[fruit] = arr[fruit];
        }
    }
    for (let b in arrOver) {
        console.log(b + ' => ' + Math.floor(Number(arrOver[b])/needsFruit));
    }

}