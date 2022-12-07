// add whatever parameters you deem necessary

function constructNote(msg, letters) {
  // check if msg is empty return true and empty letters return false
  if (msg.length === 0) return true;
  if (letters.length === 0) return false;
  // create a hash table for letters
  const hash = {};
  // loop through letters and add to hash table
  for (let i = 0; i < letters.length; i++) {
    if (hash[letters[i]]) {
      hash[letters[i]]++;
    } else {
      hash[letters[i]] = 1;
    }
  }
  // loop through msg and check if letter is in hash table
  for (let i = 0; i < msg.length; i++) {
    if (!hash[msg[i]]) return false;
    hash[msg[i]]--;
  }
  return true;
}

module.exports = constructNote;
