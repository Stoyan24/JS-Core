function twoSmallest(nums) {
    let arr = nums.sort((a,b) => a-b).slice(0,2);
    console.log(arr);
}
console.log(twoSmallest([30, 15, 50, 5,40]));