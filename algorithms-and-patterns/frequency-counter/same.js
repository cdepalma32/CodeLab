/**
 * same.js
 *
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the first array
 * has its corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * Time Complexity: O(n)
 *
 * Examples:
 * same([1, 2, 3], [4, 1, 9])          => true
 * same([1, 2, 3], [1, 9])             => false
 * same([1, 2, 1], [4, 4, 1])          => false (frequency must match)
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

const frequencyCounter1 = {};
const frequencyCounter2 = {};

for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
}

for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
}
console.log(frequencyCounter1);
console.log(frequencyCounter2);
    for(let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

same([1,2,3,3,5], [9,1,4,4,11]);

// returns false: extra 4's in array 2, missing 25 from 5**2, 
// and an extra value 11 in arr2 that has no square root in arr1

