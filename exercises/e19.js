// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  let finalArray = [];
  for (let i = 0, x = array.length - 1; i < array.length; i++, x--) {
    finalArray[i] = array[x];
  }
  console.log(finalArray);

  return finalArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
