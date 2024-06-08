/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i]);
    }
  }
  nums = newArr;
  console.log(nums);

  return newArr.length;
};

const a = removeDuplicates(nums);
console.log(a);
