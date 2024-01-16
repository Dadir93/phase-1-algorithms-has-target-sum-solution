function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here:
  O(n)
*/

/* 
  Add your pseudocode here:
  - Create an empty Set called seenNumbers
  - Iterate through the array of numbers
    - Calculate the complement of the current number with respect to the target
    - Check if the complement is in the seenNumbers Set
      - If yes, return true (pair found)
      - If no, add the current number to the seenNumbers Set
  - If the loop completes without finding a pair, return false
*/

/*
  Add written explanation of your solution here:
  The function uses a Set called seenNumbers to keep track of numbers encountered during the iteration. For each number in the array, it calculates the complement needed to reach the target. If the complement is already in the seenNumbers Set, the function returns true, indicating a pair has been found. Otherwise, the current number is added to the Set. If the loop completes without finding a pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
