/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let firstString = s.split('');
  let secondString = t.split('');
  firstString.sort();
  secondString.sort();
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      return false;
    }
  }

  return true;
};
