
# Multiple Pointers Approach

The **Multiple Pointers** pattern involves creating **two or more pointers** (or index variables) to traverse data structures like arrays from different directions.

This approach is especially useful for:
- Working with **sorted data**
- Reducing **nested loops**
- Solving problems with **constant space** complexity

---

## What Is This Pattern?

- Create pointers at different positions (start, end, or both)
- Move them toward each other based on conditions
- Great for comparisons, matching conditions, and reducing loops

---

## Where This Pattern Is Used

This pattern is commonly applied to:
- Searching for pairs (like sum = 0)
- Comparing values in a sorted array
- Finding subarrays or ranges
- Shrinking windows (with variation)

---

## Included Problems in This Folder

### 1. `sum-zero.js`
Finds the first pair in a **sorted array** whose sum is 0

### 2. `count-unique-values.js`
Counts the number of **unique values** in a sorted array using two pointers

---

## Problem Solving Framework

### 1. Understand the Problem
- What are the inputs/outputs?
- Can I restate the problem in my own words?
- Are there edge cases?

### 2. Explore Examples
- Write a few simple cases
- Add edge and complex inputs

### 3. Break It Down
- Define the pointers clearly
- Decide what condition moves which pointer
- Track the result

### 4. Solve & Simplify
- Start with the base logic
- Add edge case handling
- Test your implementation

### 5. Look Back and Refactor
- Can you make it more concise?
- Is the pointer logic clean?
- Can it be reused in similar problems?

---

## Pattern Summary

> “Use multiple pointers when working with **sorted data** or when a problem can be solved by comparing values from different ends. It reduces space and time complexity and avoids nested loops.”
