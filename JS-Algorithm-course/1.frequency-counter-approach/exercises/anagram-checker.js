// Example 2 — Anagram Checker (Frequency Counter)

// Write a function `validAnagram` that determines whether the second string is an anagram of the first.
// An anagram is a word formed by rearranging the letters of another.


// Valid Example
validAnagram('anagram', 'nagaram') // true

// Invalid Example
validAnagram('aaz', 'zza') // false


// Naive Solution (O(n²))
// This version checks each character in one string by scanning
// the other string every time — resulting in nested loops.

function naiveValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    let index = arr2.indexOf(str1[i]);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }

  return true;
}

// Why It’s Inefficient
// - Uses `indexOf()` and `splice()` inside a loop
// - `indexOf()` scans the full array every time: O(n)
// - That loop + lookup behavior = nested logic ⇒ O(n²)
// - Works fine for short strings, but becomes slow as input grows


// Refactored Anagram Solution (O(n))

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}


// Explanation of the Pattern
// 1. Check if the two strings are the same length.
// 2. Use the first loop to count the frequency of each character in the first string.
// 3. Use the second loop to decrement the count from the lookup.
// 4. If a character doesn't exist or count drops below zero, return false.
// 5. If all characters are accounted for, return true.


// How It Works
// Input: "anagram" and "nagaram"
// First pass → lookup = { a:3, n:1, g:1, r:1, m:1 }
// Second pass → each letter from second string decrements value
// Final state: all counts reach 0 → ✅ return true

// If any letter was missing or extra → lookup would return false
