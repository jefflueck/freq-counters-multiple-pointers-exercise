// add whatever parameters you deem necessary
function pivotIndex(arr) {
  // create a left sum
  let left = 0;
  // create a right sum
  let right = 0;
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // add to right sum
    right += arr[i];
  }
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if left === right - arr[i]
    if (left === right - arr[i]) {
      // return i
      return i;
    }
    // add to left sum
    left += arr[i];
    // subtract from right sum
    right -= arr[i];
  }
  // return -1
  return -1;
}

module.exports = pivotIndex;
