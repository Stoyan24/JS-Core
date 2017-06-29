function solve(arr, orderType){
    let ascendingSort = function (a, b){
        return a - b;
    };

    let descendingSort = function (a, b){
        return b - a;
    };
    let sortingTypes = {
        asc: ascendingSort,
        desc: descendingSort
    };
    return arr.sort(sortingTypes[orderType]);
}