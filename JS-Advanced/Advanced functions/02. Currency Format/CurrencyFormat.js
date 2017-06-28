function simplifiedFormatter(formatter){
    return function(val) {
        return formatter(',', '$', true, val);
    };

    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2,2);
        if (symbolFirst)
            return symbol + ' ' + result;
        else
            return result + ' ' + symbol;
    }
}