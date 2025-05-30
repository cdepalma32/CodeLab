
// Example 1 — Sum Zero (Multiple Pointers)

// Write a function called `sumZero` which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.


// Valid Example
sumZero([-4,-3,-2,-1,0,1,2,5]) // [-2, 2]

// Invalid Examples
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3])     // undefined


// Naive Solution (O(n²))
// This version checks each pair using nested loops to find a zero sum.
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Why It’s Inefficient
// - Uses two nested loops to compare every possible pair
// - Leads to **quadratic time complexity**: O(n²)


// Refactored Solution (O(n))
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// Explanation of the Pattern
// 1. Set two pointers: one at the start, one at the end of the array
// 2. Calculate the sum of the values at those pointers
// 3. If sum is 0, return the pair
// 4. If sum is > 0, move right pointer left
// 5. If sum is < 0, move left pointer right
// 6. Continue until pointers cross

// How It Works
// Initial: left = -4, right = 10 → sum too high → move right--
// Eventually: left = -3, right = 3 → sum = 0 → ✅ return [-3, 3] 
