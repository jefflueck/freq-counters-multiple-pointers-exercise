// * Could not find a solution for this problem that worked for all test cases.
// add whatever parameters you deem necessary
function separatePositive(arr) {
  // create two pointers
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // if left is positive and right is negative, swap
    if (arr[left] > 0 && arr[right] < 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    // if left is positive and right is positive, move right pointer left
    else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    }
    // if left is negative and right is negative, move left pointer right
    else if (arr[left] < 0 && arr[right] < 0) {
      left++;
    }
    // if left is negative and right is positive, move both pointers
    else {
      left++;
      right--;
    }
  }
  return arr;
}

module.exports = separatePositive;
