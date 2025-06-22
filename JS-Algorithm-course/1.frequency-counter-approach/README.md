# Frequency Counter Approach

The **Frequency Counter** is a powerful algorithmic pattern used to compare the **frequency of values** (numbers, characters, etc.) in collections like arrays or strings, in **linear time**.

---

## What Is This Pattern?

A **frequency counter** uses **objects (or maps)** to:

- Count occurrences of elements
- Avoid nested loops (`O(n²)`)
- Replace them with **two separate loops** (`O(n)`)

---

## When to Use This Pattern?

Ask yourself:

- Am I comparing **elements or characters**?
- Do I need to match **frequency** of values?
- Does my naive solution involve **nested loops**?
  If yes → use the **frequency counter** approach.

---

## Common Use Cases

This approach works best for problems that involve:

- Comparing two arrays or strings
- Checking for anagrams
- Matching squared/cubed values
- Duplicate detection
- Frequency validation
- Inventory tracking
- Dataset comparison

---

## Included Problems in This Folder

| File                             | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| `comparing-arrays.js`            | Checks if one array contains the **squares** of another |
| `anagram-checker.js`             | Determines if one string is an **anagram** of another   |
| `top-k-frequent-elements-347.js` | Returns the `k` most frequent elements from an array    |

---

## Problem Solving Framework

### 1. Understand the Problem

- Restate in your own words
- What are the inputs/outputs?
- Can the output be determined from the inputs?
- Are there edge cases?

---

### 2. Explore Examples

- Use real values + edge cases
- Start with simple inputs
- Create sanity checks
- Add edge cases (empty, null, invalid)
- Move to complex inputs

**Example**:  
Write a function that counts characters in a string

```js
charCount("aaaa"); // { a: 4 }
charCount("hello"); // { h:1, e:1, l:2, o:1 }
charCount("123abc!"); // { 1:1, 2:1, 3:1, a:1, b:1, c:1 }
```

Ask:

- Do we ignore special characters?
- Case sensitivity?
- Do we return all characters or only those that exist?

---

### 3. Break It Down

Before coding:

- Write out each logical step before coding
- Think in variables
- Sketch a plan — even if messy

---

### 4. Solve & Simplify

- Solve a **simplified version** if stuck
- Leave out hard parts at first
- Build confidence by solving smaller steps
- Add constraints later

---

### 5. Look Back and Refactor

- Can you simplify?
- Can you make it more readable?
- Can the logic be generalized?
- Can this logic apply to other problems?
- Can you improve performance?

---

## Performance Tips for Char Counting

- Use `charCodeAt()` to avoid regex (faster in performance-heavy apps)
- Use `for...of` loop for clean syntax
- Use lowercase conversion only if the character is alphanumeric
- Combine increment into a single line using `obj[char] = ++obj[char] || 1`

---

## Pattern Summary

> "Use a frequency counter when you're comparing frequency of elements or characters. It turns nested loops into efficient hash map checks — often reducing time complexity from O(n²) to O(n)."
