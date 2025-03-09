let nums = [3, 4.5, 11, 8, 55, 12.71];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    sum += nums[i];
}
console.log(`Sum: ${sum.toFixed(2)} \nAvg: ${(sum / nums.length).toFixed(2)}`);
