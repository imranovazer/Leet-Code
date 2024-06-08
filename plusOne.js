/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let currentIndex = digits.length - 1;
  while (true) {
    if (currentIndex === -1) {
      digits.unshift(1);
      return digits;
    }
    const changedNum = digits[currentIndex] + 1;
    if (changedNum > 9) {
      digits[currentIndex] = changedNum - 10;
      currentIndex -= 1;
    } else {
      digits[currentIndex] = changedNum;
      return digits;
    }
  }
};

// plusOne([9]);
