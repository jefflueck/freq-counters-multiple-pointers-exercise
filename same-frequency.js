// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  if (!num1 || !num2) return false;
  const strHash = {};
  const str2Hash = {};
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (strHash[str1[i]]) {
      strHash[str1[i]]++;
    } else {
      strHash[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Hash[str2[i]]) {
      str2Hash[str2[i]]++;
    } else {
      str2Hash[str2[i]] = 1;
    }
  }
  for (let key in strHash) {
    if (strHash[key] !== str2Hash[key]) return false;
  }
  return true;
}

module.exports = sameFrequency;
