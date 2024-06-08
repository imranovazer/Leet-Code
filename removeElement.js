/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  nums.forEach((item, index) => {
    if (item === val) {
      nums[index] = '_';
      count++;
    }
  });
  nums.sort();
  return nums.length - count;
};
