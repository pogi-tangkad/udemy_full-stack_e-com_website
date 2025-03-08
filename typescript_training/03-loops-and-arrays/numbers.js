var nums = [3, 4.5, 11, 8, 55, 12.71];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    sum += nums[i];
}
console.log("Sum: ".concat(sum.toFixed(2), " \nAvg: ").concat((sum / nums.length).toFixed(2)));
