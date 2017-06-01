function twoSmallesst(nums) {
    let arr = nums.sort((a,b) => b-a).slice(-2).reverse();
    console.log(arr);
}
console.log(twoSmallesst([30, 15, 50, 5,40]));