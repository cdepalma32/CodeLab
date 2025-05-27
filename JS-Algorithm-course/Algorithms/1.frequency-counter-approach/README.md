
# 🧠 Frequency Counter Pattern

## Why Use It?

- Compare data (arrays or strings) **efficiently**
- Avoid nested loops (O(n²)) by using objects for lookups
- Improve performance by reducing time complexity to **O(n)**
- Particularly helpful in **interview settings**

---

## 🚀 Goal

- Compare datasets (arrays or strings) by both **value** and **frequency**
- Check for correct values and how often they appear
- Not just: “Does this value exist?”
- But: “Does it exist the correct number of times?”

---

## 🧪 Example 1 — Comparing Arrays

### 🔹 Problem

Write a function called `same`, which accepts two arrays.  
Return `true` if every value in the first array has its **corresponding value squared** in the second array.  
The **frequency** of values must also match.

### ✅ Valid Example

```js
same([1,2,3], [4,1,9]) // true
```

### ❌ Invalid Examples

```js
same([1,2,3], [1, 9])      // false – missing 4
same([1,2,1], [4,4,1])     // false – wrong frequency
```

---

## ❌ Naive Solution (O(n²))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}
```

### 🔍 Why It’s Inefficient

- Uses `indexOf()` inside a loop ⇒ behaves like a nested loop
- Leads to **quadratic time complexity**: O(n²)

---

## ✅ Refactored Solution (O(n))

```js
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
```

---

## 🔤 Example 2 — Anagram Checker

### 🔹 Problem

Write a function `validAnagram` that determines whether the second string is an anagram of the first.  
> An anagram is a word formed by rearranging the letters of another.

### ✅ Valid Example

```js
validAnagram('anagram', 'nagaram') // true
```

### ❌ Invalid Example

```js
validAnagram('aaz', 'zza') // false
```

---

## ✅ Anagram Solution (O(n))

```js
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }

  return true;
}
```

---

## 🔁 Explanation of the Pattern

### Step-by-Step:

1. Check if the two arrays or strings are the same length.
2. Use two **separate loops** to count frequency (never nested).
3. Store those frequencies in an **object**.
4. Loop through one frequency object and verify against the other.

---

## 🧠 How It Works

Example:  
`anagram` → `lookup = { a:3, n:1, g:1, r:1, m:1 }`  
Then loop through `'nagaram'`, subtracting from each key.

If any character doesn't exist or goes below zero → return `false`.

---

## 🧾 Interview Summary (What You Can Say)

> “I used the frequency counter pattern to compare the structure and frequency of values between two datasets.  
> I built an object to track character or number counts in the first input, then looped over the second to validate those counts.  
> This gives me O(n) time complexity by avoiding nested loops.”

---

## 🧪 Test Cases

```js
// same()
same([2,2,3], [4,4,9])        // true
same([2,3], [4,9])            // true
same([2,3], [9,1])            // false

// validAnagram()
validAnagram('text', 'etxt') // true
validAnagram('hello', 'bello') // false
```

---

## 🛠 Use Cases

- Anagram validation
- Matching squared or cubed values
- Duplicate detection
- Comparing user input vs stored data
- Data normalization

---

## 🧩 Key Takeaways

- Use **objects** to count frequency of items.
- Loop through each array/string once to build those objects.
- Validate using a second loop — but **not nested**.
- Time complexity = **O(n)** instead of **O(n²)**

---

## ✨ Summary in One Line

> Frequency counters help compare the structure of arrays or strings efficiently by mapping values to counts — allowing you to verify content equivalence without expensive nested loops.
