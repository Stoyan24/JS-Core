function solve(str1, str2) {
    let result = str1.split('').reverse().join().indexOf(str2.split('').reverse().join());
    if(result == 0){
        console.log('true');
    }else {
        console.log('false');
    }
}
solve('This sentence ends with fun?', 'fun?');