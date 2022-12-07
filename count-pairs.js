// add whatever parameters you deem necessary
function countPairs(nums, target) {
  // create a hash table
  const hash = {};
  // create a counter
  let counter = 0;
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // check if target - nums[i] is in hash table
    if (hash[target - nums[i]]) {
      // increment counter
      counter++;
    }
    // add nums[i] to hash table
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return counter;
}

module.exports = countPairs;
