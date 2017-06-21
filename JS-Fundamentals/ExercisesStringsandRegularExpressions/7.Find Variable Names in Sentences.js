function solve(str) {
    let regex = /\b_(\w+)\b/gm;
    console.log(str.match(regex).join(',').replace(regex, (full, grup1)=>full = grup1));
}
solve('The _id and _age variables are both integers.');