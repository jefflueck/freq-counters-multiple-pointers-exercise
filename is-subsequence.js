// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  // create a pointer for str1
  let i = 0;
  // loop through str2
  for (let j = 0; j < str2.length; j++) {
    // check if str1[i] === str2[j]
    if (str1[i] === str2[j]) {
      // increment i
      i++;
    }
    // check if i === str1.length
    if (i === str1.length) {
      // return true
      return true;
    }
  }
  // return false
  return false;
}

module.exports = isSubsequence;
