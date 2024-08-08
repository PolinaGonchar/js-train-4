// Task 1: Write a function that converts a string to a number using Number()

function stringToNumber(str) {
  // Use Number() to convert the string to a number
  return Number(str);
}

console.log("Task 1 ====================================");
console.log('stringToNumber("42")', stringToNumber("42")); // Outputs 42

// Task 2: Write a function that determines if two numbers are almost the same using Number.EPSILON

function isAlmostSame(num1, num2) {
  let difference = Math.abs(num1 - num2);
  return difference <= Number.EPSILON;
}

console.log("Task 2 ====================================");
console.log("isAlmostSame(0.1 + 0.2, 0.3)", isAlmostSame(0.1 + 0.2, 0.3)); // Outputs true

// Task 3: Write a function that checks if a number is a safe integer

function isSafeInteger(num) {
  return Number.isInteger(num) && num <= Number.MAX_SAFE_INTEGER && num >= Number.MIN_SAFE_INTEGER;
}

console.log("Task 3 ====================================");
console.log(
  "isSafeInteger(Number.MAX_SAFE_INTEGER + 1)",
  isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
); // Outputs false

// Task 4: Using the results from Task 3, write a function that checks if a number is an unsafe integer

function isUnsafeInteger(num) {
  return !isSafeInteger(num);
}

console.log("Task 4 ====================================");
console.log(
  "isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)",
  isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)
); // Outputs true

// Task 5: Write a function that checks if a number is too large to be represented in JavaScript

function isTooLarge(num) {
  return num > Number.MAX_VALUE;
}

console.log("Task 5 ====================================");
console.log(
  "isTooLarge(Number.MAX_VALUE * 2)",
  isTooLarge(Number.MAX_VALUE * 2)
); // Outputs true

// Task 6: Write a function that checks if a number is smaller than the smallest possible numeric value in JavaScript

function isAlmostZero(num) {
  return num > 0 && num < Number.MIN_VALUE;
}

console.log("Task 6 ====================================");
console.log(
  "isAlmostZero(Number.MIN_VALUE / 2)",
  isAlmostZero(Number.MIN_VALUE / 2)
); // Outputs false
console.log("isAlmostZero(Number.MIN_VALUE)", isAlmostZero(Number.MIN_VALUE)); // Outputs false

// Task 7: Write a function that checks if a value is an integer

function checkIsInteger(num) {
  return Number.isInteger(num);
}

console.log("Task 7 ====================================");
console.log("checkIsInteger(42.5)", checkIsInteger(42.5)); // Outputs false

// Task 8: Write a function that checks if a value is a safe integer

function checkIsSafeInteger(num) {
  return Number.isSafeInteger(num);
}

console.log("Task 8 ====================================");
console.log(
  "checkIsSafeInteger(Math.pow(2, 53))",
  checkIsSafeInteger(Math.pow(2, 53))
); // Outputs false

// Task 9: Write a function that converts a number to a string in exponential notation

function convertToExponential(num) {
  return num.toExponential();
}

console.log("Task 9 ====================================");
console.log("convertToExponential(42)", convertToExponential(42)); // Outputs "4.2e+1"

// Task 10: Write a function that converts a number to a string with a fixed number of decimals

function convertToFixed(num, precision) {
  return num.toFixed(precision);
}

console.log("Task 10 ====================================");
console.log("convertToFixed(42.9876, 2)", convertToFixed(42.9876, 2)); // Outputs "42.99"

// Task 11: Write a function that converts a number to a string

function convertToString(num) {
  return num.toString();
}

console.log("Task 11 ====================================");
console.log("convertToString(42)", convertToString(42)); // Outputs "42"

// Task 12: Write a function that rounds a number to a specified precision

function convertToPrecision(num, precision) {
  return num.toPrecision(precision);
}

console.log("Task 12 ====================================");
console.log("convertToPrecision(42.9876, 2)", convertToPrecision(42.9876, 2)); // Outputs "43"
