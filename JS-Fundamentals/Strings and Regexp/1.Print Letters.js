function printLetters(string) {
    let result = string.split('').forEach((el,index) => console.log(`str[${index}] -> ${el}`));
}
printLetters('Hello, World!');
