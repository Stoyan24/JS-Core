function buildDB(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let [system, component, subcomp] = input[i].split(' | ').map(x=>x.trim());
        if (!map.has(system)) {
            map.set(system, new Map());
        }
        if (!map.get(system).get(component)) {
            map.get(system).set(component, []);
        }
        map.get(system).get(component).push(subcomp);
    }

    map = [...map].sort(sortByCompo);
    for (let [system, innerMap] of map) {
        console.log(system);
        innerMap = [...innerMap].sort(subCompSort);
        for (let [component, subCompArr] of innerMap) {
            console.log('|||' + component);
            for (let subComp of subCompArr) {
                console.log('||||||' + subComp);
            }
        }
    }

    function subCompSort(a, b) {
        return a[1].length < b[1].length;

    }

    function sortByCompo(a, b) {

        if ([...a[1]].length != [...b[1]].length) {
            return [...a[1]].length < [...b[1]].length
        } else {
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        }

    }
}

buildDB([
    'Sab | Main Site | Home Page',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'SULS | Judge Site | Submittion Page1',
    'SULS | Judge Site | Submittion Page2',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'

]);