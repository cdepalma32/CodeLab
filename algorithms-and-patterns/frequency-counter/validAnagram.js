/**
 * validAnagram.js
 * 
 * Given two strings, determine if the second string is an anagram of the first.
 * Time Complexity: O(n)
 * 
 * Examples:
 * validAnagram('', '') => true
 * validAnagram('aaz', 'zza') => false
 * validAnagram('anagram', 'nagaram') => true
 * 
 * Assumes inputs are lowercase alphabetic strings only.
 */

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of second) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }

  return true;
}

// === Test cases ===
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('aaz', 'zza'));         // false
console.log(validAnagram('', ''));               // true