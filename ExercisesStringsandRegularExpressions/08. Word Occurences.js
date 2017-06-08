function solve(sentence,word) {;
    let regex = new RegExp("\\b"+word+"\\b","gi");
    let result = sentence.match(regex);
    if(result != null){
        console.log(result.length)
    }else{
        console.log('0');
    }
}
solve('The waterfall was so high, that the child couldn’t see its peak.',
'the');