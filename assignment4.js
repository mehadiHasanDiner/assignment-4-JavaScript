// Problem 1: Let’s play a mind game

// function mindGame(givenInput) {
//   const output = (givenInput * 3 + 10) / 2 - 5;
//   return output;
// }

// const input = 33;
// if (input > 0) {
//   console.log("Thanks!");
// } else {
//   console.log("Please enter a positive number.");
// }

// const totalResult = mindGame(input);

// console.log(totalResult);

// Problem 2: Finding even or odd
// function evenOdd(givenString) {
//   if (givenString.length % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// const input = "chatgpt";
// if (typeof input === "string") {
//   console.log("Thanks!");
// } else {
//   console.log("Please enter a string element");
// }

// const result = evenOdd(input);
// console.log(result);

// Problem 3: Is Less or Greater than seven

function isLGSeven(givenInput) {
  const subtractionOf7 = givenInput - 7;

  if (subtractionOf7 < 7) {
    return subtractionOf7;
  } else {
    const result = givenInput * 2;
    return result;
  }
}

const input = 6;
if (typeof input === "number") {
  console.log("Thanks!");
} else {
  console.log("Please input a number");
}

const result = isLGSeven(input);
// console.log(result);
