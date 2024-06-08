/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arrA = a.split('').map((i) => Number(i));
  let arrB = b.split('').map((i) => Number(i));
  let result = [];

  if (a.length > b.length) {
    for (let i = 0; i < a.length - b.length; i++) {
      arrB.unshift(0);
    }
  } else if (b.length > a.length) {
    for (let i = 0; i < b.length - a.length; i++) {
      arrA.unshift(0);
    }
  }

  let carry = 0;
  for (let j = arrA.length - 1; j >= 0; j--) {
    let tempSum = arrA[j] + arrB[j];
    if (tempSum === 2) {
      let tempSumAfterCarry = 0 + carry;
      result.unshift(tempSumAfterCarry);
      carry = 1;
    } else if (tempSum === 1) {
      let tempSumAfterCarry2 = tempSum + carry;
      if (tempSumAfterCarry2 > 1) {
        result.unshift(0);
        carry = 1;
      } else {
        result.unshift(tempSumAfterCarry2 + carry);
        carry = 0;
      }
    } else if (tempSum === 0) {
      result.unshift(0 + carry);
      carry = 0;
    }
  }
  carry > 0 && result.unshift(carry);
  //   console.log(result.join(''));
  return result.join('');
};

addBinary('1010', '1011');
