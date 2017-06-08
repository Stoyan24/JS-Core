function a(input) {
    let f = input.forEach
    (l => console.log(l.replace
    (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
        (m) => '|'.repeat(m.length))));
}