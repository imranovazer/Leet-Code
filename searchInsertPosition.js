/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  const verify = nums.indexOf(target);
  if (verify === -1) {
    for (let i = 0; i < nums.length; i++) {
      let prev = nums[i - 1] || target - 1;
      let next = nums[i];
      if (prev < target && next > target) {
        return i;
      }
    }
  }
  return verify === -1 ? nums.length : verify;
};

console.log(searchInsert([2, 5], 1));
