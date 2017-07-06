function sortedList() {
    let list = (function () {
        let nums = [];
        
        return {
            size: 0,
            add: function (element) {
                nums.push(element);
                this.size++;
                nums.sort((a, b) => a - b);
            },
            remove: function (index) {
                if (index < nums.length && index >= 0){
                    nums.splice(index, 1);
                    nums = nums.sort((a, b) => a - b);
                    this.size--;
                }
            },
            get : function(index) {
                if (index < nums.length && index >= 0)
                    return nums[index]
            }
        }
    })();
    return list;
}