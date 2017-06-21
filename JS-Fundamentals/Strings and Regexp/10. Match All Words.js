function match(text)  {
    let result = text.match(/\w+/g);
    return result.join('|');
}
console.log(match('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));