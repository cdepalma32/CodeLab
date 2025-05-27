# Frequency Counter Approach

The **Frequency Counter** is a powerful algorithmic pattern used to compare the **frequency of values** (numbers, characters, etc.) in collections like arrays or strings, in **linear time**.

---

## What Is This Pattern?

A **frequency counter** uses **objects (or maps)** to:
- Count occurrences of elements
- Avoid nested loops (`O(n²)`)
- Replace them with **two separate loops** (`O(n)`)

---

## Where This Pattern Is Used

This approach works best for problems that involve:
- Comparing two arrays or strings
- Checking for anagrams
- Matching squared/cubed values
- Duplicate detection
- Frequency validation
- Inventory tracking
- Dataset comparison

---

## How to Recognize When to Use It

Ask yourself:
- Am I comparing **elements or characters**?
- Do I need to match **frequency** of values?
- Does my naive solution involve **nested loops**?
If yes → use the **frequency counter** approach.

---

## Included Problems in This Folder

### 1. `comparing-arrays.js`
- Checks if one array contains the **squares** of values in another
- Uses object counters instead of nested loops

### 2. `anagram-checker.js`
- Determines if one string is an **anagram** of another
- Avoids string slicing/indexing by using a lookup object

### 3. ` .js`
- Placeholder


### 3. ` .js`
- Placeholder


---

## Problem Solving Framework

### 1. Understand the Problem
- Can you restate the problem in your own words?
- What are the inputs?
- What are the expected outputs?
- Can outputs be determined from inputs?
- How should you label the data?

**Example**:  
Write a function that takes two numbers and returns their sum.  
→ Inputs: two numbers (integers? floats?)  
→ Output: number  
→ Edge: What if only one number is passed?

---

### 2. Explore Examples
- Start with simple inputs
- Create sanity checks
- Add edge cases (empty, null, invalid)
- Move to complex inputs

**Example**:  
Write a function that counts characters in a string

```js
charCount("aaaa")       // { a: 4 }
charCount("hello")      // { h:1, e:1, l:2, o:1 }
charCount("123abc!")    // { 1:1, 2:1, 3:1, a:1, b:1, c:1 }
```

Questions:
- Do we ignore special characters?
- Case sensitivity?
- Do we return all characters or only those that exist?

---

### 3. Break It Down
Before coding:
- Write out the logical steps
- Name data clearly
- Catch edge cases early
- Build a mini plan, even if rough

---

### 4. Solve & Simplify
- Solve a **simplified version** if stuck
- Leave out hard parts at first
- Build confidence by solving smaller steps

---

### 5. Look Back and Refactor
- Can you simplify?
- Can you use a helper?
- Is it readable?
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

> "Use a frequency counter when you need to **compare frequency of values or characters** between two datasets, especially if your naive solution involves a nested loop. Replace nested logic with **objects** to count, compare, and validate in linear time."

---
