// Suppose we want to write a function that calculates the sum of all numbers
// form 1 up to (and including) some number n.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(1000000000));

// for the above operation the big o = O(n) because  the n operation grows with
// the input

// another way of doing it
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(16));

// for the above function  = O(1) no matter the input n doest grow

// which on is better
/* faster?*/
/* less memory-intensive?*/
/* More readable?*/

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(2));

// the above notation = O(n2)

/*function that return the count of each character */

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
console.log(charCount("happy coding"));

/*
refactoring the above solution
*/

function charCount1(str) {
  let obj = {};
  for (let char1 of str) {
    if (isAlphaNumeric(char1)) {
      char1 = char1.toLowerCase();
      obj[char1] = ++obj[char1] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

console.log(charCount1("happy coding happy"));
