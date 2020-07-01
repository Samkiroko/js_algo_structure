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
console.log(printAllPairs(10));

// the above notation = O(n2)
