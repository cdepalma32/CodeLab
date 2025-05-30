// Example 2 — Count Unique Values (Multiple Pointers)

// Write a function called `countUniqueValues` which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers, but the array will always be sorted.


// Valid Examples
countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13]) // 7

// Edge Cases
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4


// Refactored Solution (O(n))
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// Explanation of the Pattern
// 1. Use two pointers (i and j)
// 2. i tracks the position of the last unique value
// 3. j scans through the array
// 4. When a new unique value is found, move i forward and overwrite the value at i
// 5. At the end, i + 1 is the number of unique values

// How It Works
// Given: [1,1,2,3]
// i=0, j=1 → same → skip
// j=2 → arr[i] !== arr[j] → i++, arr[i]=arr[j]
// Final i = 2 → return i + 1 = 3
