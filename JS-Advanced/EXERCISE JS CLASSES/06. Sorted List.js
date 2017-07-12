class SortedList{
    constructor(){
        this.nums = [];
        this.size = 0;
    }
    get(index){
        if(index < this.nums.length && index >= 0){
            return this.nums[index];
        }
    }
    add(element){
        this.nums.push(element);
        this.size++;
        this.nums = this.nums.sort((a,b)=> a -b )
        return this.nums;
    }
    remove(index){
        if(index < this.nums.length && index >=0){
            this.nums.splice(index,1);
            this.nums = this.nums.sort((a,b) => a-b);
            this.size--;
            return this.nums;
        }
    }}
