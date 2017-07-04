(function solve(){
    Array.prototype.last = function() { return this[this.length - 1]; };
    Array.prototype.skip =  function(n) {
        let modifiedArray = [];
        for (let i = n; i < this.length; i++)
            modifiedArray.push(this[i]);
        return modifiedArray
    };
    Array.prototype.take = function(n) {
        let modifiedArray = [];
        for (let i = 0; i < n; i++)
            modifiedArray.push(this[i])
        return modifiedArray
    };
    Array.prototype.sum = function() {
        let sum = 0;
        for (let num of this)
            sum += Number(num)
        return sum
    };
    Array.prototype.average = function() {
        return this.sum() / this.length
    }
})();