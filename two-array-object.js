// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  // create an object
  const obj = {};
  // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // add key and value to object
    obj[arr1[i]] = arr2[i] || null;
  }
  return obj;
}

module.exports = twoArrayObject;
