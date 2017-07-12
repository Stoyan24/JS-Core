class Stringer {

    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if(value < 0){
            this._innerLength = 0;
        }else {
            this._innerLength = value;
        }
    }

    increase(lenght) {
        this.innerLength += lenght;
    }
    decrease(lenght){
        this.innerLength -= lenght;
    }

    toString(){
        if(this.innerString.length <= this.innerLength){
            return this.innerString;
        }

        return this.innerString.substring(0 ,this.innerLength) + '...';
    }

}