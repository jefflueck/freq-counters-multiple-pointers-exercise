// * could not find a solution for this problem that worked for all test cases.
// add whatever parameters you deem necessary
function longestFall(arr) {
  // create a counter
  let counter = 0;
  // create a max counter
  let max = 0;
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if arr[i] > arr[i + 1]
    if (arr[i] > arr[i + 1]) {
      // increment counter
      counter++;
    } else {
      // reset counter
      counter = 0;
    }
    // check if counter > max
    if (counter > max) {
      // set max to counter
      max = counter;
    }
  }
  return max;
}

module.exports = longestFall;
