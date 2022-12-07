// add whatever parameters you deem necessary
function averagePair(nums, target) {
  // check if nums is empty return false
  if (nums.length === 0) return false;
  // create two pointers
  let left = 0;
  let right = nums.length - 1;
  // loop through nums
  while (left < right) {
    // calculate average
    let avg = (nums[left] + nums[right]) / 2;
    // check if average is equal to target
    if (avg === target) return true;
    // check if average is less than target
    if (avg < target) {
      // move left pointer
      left++;
    } else {
      // move right pointer
      right--;
    }
  }
  return false;
}

module.exports = averagePair;
