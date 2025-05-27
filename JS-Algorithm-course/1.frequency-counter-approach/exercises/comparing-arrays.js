//Example 1 — Comparing Arrays

    // Write a function called `same`, which accepts two arrays.  
    // Return `true` if every value in the first array has its **corresponding value squared** in the second array.  
    // The **frequency** of values must also match.

//Valid Example
same([1,2,3], [4,1,9]) // true

// Invalid Examples
same([1,2,3], [1, 9])      // false – missing 4
same([1,2,1], [4,4,1])     // false – wrong frequency


//Naive Solution (O(n²))
  // This version checks each value in one array by scanning
  // the second array for its square — resulting in nested loops.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Why It’s Inefficient
    // Uses `indexOf()` inside a loop ⇒ behaves like a nested loop
    // Leads to **quadratic time complexity**: O(n²)


// Refactored Solution (O(n))

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

// Explanation of the Pattern
// 1. Check if the two arrays are the same length.
// 2. Use two separate loops to count the frequency of values.
// 3. Store those frequencies in two objects.
// 4. Loop through the first object and ensure that each value squared
//    exists in the second object with the same count.
// 5. This avoids nested loops and results in **O(n)** time complexity.


// How it works
// Given arr1 = [1, 2, 3], we build: frequencyCounter1 = {1:1, 2:1, 3:1}
// Given arr2 = [4, 1, 9], we build: frequencyCounter2 = {1:1, 4:1, 9:1}
//
  // We then check:
// - Is 1^2 (1) in arr2?  Yes, and count matches
// - Is 2^2 (4) in arr2?  Yes, and count matches
// - Is 3^2 (9) in arr2?  Yes, and count matches
//
// If all squared keys exist with correct frequency, return true.
// If any are missing or mismatched in count, return false.