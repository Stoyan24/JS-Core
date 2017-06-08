function solve(str1, str2) {
    let result = str1.indexOf(str2);
    if(result == 0){
        console.log('true');
    }else {
        console.log('false');
    }
}
solve('How have you been?','how');