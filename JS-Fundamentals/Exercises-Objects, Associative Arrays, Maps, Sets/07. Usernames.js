function orderUsername(input) {
    let set = new Set();

    for (let i = 0; i<input.length;i++) {
        set.add(input[i]);
    }
    set = [...set].sort(sortUsername);
    set.forEach(x=>console.log(x));
    function sortUsername(a,b) {
        if ( a.length != b.length ) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}

orderUsername([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'

]);