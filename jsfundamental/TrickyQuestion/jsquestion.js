/*
  Instructions
  Answer each question by writing to console.log

  EXAMPLE:

  Question: Add an exclamation to the end of a string `text`

  Your Answer: console.log(`${text}!`);
 */

//
// PART 1 - Strings
// Using the string variable "text"... write each answer to console.log
//

const text = 'I am a master at strings';

// 1 - Replace first occurrence of the letter 'a' with the letter 'z'
console.log('1: ' + text);

// 2 - Replace all occurrences of the letter 'a' with the letter 'z'
console.log('2: ' + text);

// 3 - Print 0-based position of the first letter 'm'
console.log('3: ' + text);

//
// PART 2 - Arrays
// Using the number array variable "list"... write each answer to console.log
//

const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
console.log('4: ' + list);

// 5 - Sort the list highest to lowest
console.log('5: ' + list);

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
console.log('6: ' + list);
// =====================================================================

// Here’s the corrected code with the correct implementations:

```js
const text = 'I am a master at strings';

// 1 - Replace first occurrence of the letter 'a' with the letter 'z'
console.log('1: ' + text.replace('a', 'z'));

// 2 - Replace all occurrences of the letter 'a' with the letter 'z'
console.log('2: ' + text.replace(/a/g, 'z'));

// 3 - Print 0-based position of the first letter 'm'
console.log('3: ' + text.indexOf('m'));

const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
const sumOdd = list.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
console.log('4: ' + sumOdd);

// 5 - Sort the list highest to lowest
console.log('5: ' + list.sort((a, b) => b - a));

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
console.log('6: ' + list.join('~'));
```

// This ensures that:
// - String manipulations are done correctly.
// - Filtering and summing odd numbers works as expected.
// - Sorting the array in descending order is accurate.
// - Joining the numbers with a `~` delimiter works correctly.

// Let me know if you need any modifications! 🚀