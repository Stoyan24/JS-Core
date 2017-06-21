function solve(strArr) {
    let unique = new Set();
    let words = strArr.join('\n').split(/\W+/).filter(el => el !== '').map(el => el.toLowerCase()).forEach(el => unique.add(el));

    console.log([...unique].join(', '))
}
solve([
    'JS devs use Node.js for server-side JS.',
    'JS devs use JS.',
    '-- JS for devs --'])