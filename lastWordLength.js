/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(' ');

  const filteredArray = arr.filter((item) => item !== '');
  //   console.log(filteredArray);
  return filteredArray[filteredArray.length - 1].length;
};

// const out = lengthOfLastWord('   fly me   to   the moon  ');
// console.log(out);
