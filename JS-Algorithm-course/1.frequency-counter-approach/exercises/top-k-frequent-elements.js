// Example 3 - Top K Frequen Elements (Frequency Counter + Heap/Sorting)

// LeetCode #347
// Write a function `topKFrequent(nums, k)` that returns the k most frequent elements in an array.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2] (these are the 2 most frequent elements)

// Challenge: You must count how often each number appears, then return the top k most frequent.

// Naive Approach (O(n²) - Not ideal for large inputs):
// - Count frequency using nested loops
// - Push into array, sort manually
// - Slow as input grows (we skip it here in favor of direct optimization)

function naiveTopKFrequent(nums, k) {
  const counted = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if we've already counted this number
    if (counted.find(entry => entry[0] === num)) continue;

    // Count its frequency by scanning the entire array
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === num) count++;
    }

    counted.push([num, count]);
  }

  // Sort by frequency
  counted.sort((a, b) => b[1] - a[1]);

  // Extract top k elements
  return counted.slice(0, k).map(entry => entry[0]);
}


// Refactored Efficient Solution (O(n log n) or better)

function topKFrequent(nums, k) {
  const frequencyMap = {};

  // Step 1: Build frequency map
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Step 2: Convert map into array of [num, count] pairs
  const sorted = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  // Step 3: Return the first k elements (extract just the numbers)
  return sorted.slice(0, k).map(entry => Number(entry[0]));
}

// Test Cases
console.log(topKFrequent([1,1,1,2,2,3], 2));   // [1,2]
console.log(topKFrequent([1], 1));             // [1]
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2)); // [-1,2] or [2,-1]


// Explanation of the Pattern
// 1. Use a frequency counter (object) to count how often each number appears.
// 2. Sort the result by count in descending order.
// 3. Return the top k keys (elements).

// - Time Complexity
// - Building frequency map: O(n)
// - Sorting entries: O(n log n)
// - Final slice/map: O(k)
// → Overall: O(n log n)