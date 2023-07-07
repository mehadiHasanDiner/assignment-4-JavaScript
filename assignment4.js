// Problem 1: Let’s play a mind game
function mindGame(givenInput) {
  const output = (givenInput * 3 + 10) / 2 - 5;
  return output;
}

const input = 33;
if (input >= 0) {
  console.log("Thanks!");
} else {
  console.log("Please enter a positive number.");
}

const totalResult = mindGame(input);

/**
 * by this function we can count exam result.
 */

// Problem 2: Finding even or odd
function evenOdd(givenString) {
  if (givenString.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const input = "chatgpt";
if (typeof input === "string") {
  console.log("Thanks!");
} else {
  console.log("Please enter a string element");
}

const result = evenOdd(input);

/**
 * by this function we can count total number of an string
 * we can found which one even and which one is odd.
 */

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

/**
 * by this function we can compare the date with an exact number
 */

// Problem 4: Finding Bad data
function findingBadData(givenArray) {
  let badData = [];
  for (i = 0; i <= givenArray.length; i++) {
    const findData = givenArray[i];
    if (givenArray[i] < 0) {
      badData.push(findData);
    }
  }
  return badData;
}

function totalOfData(badData) {
  const data = badData.length;
  if (data >= 0) {
    return data;
  }
}

const inputArray = [-4, -9, -5, -33, -55];
if (Array.isArray(inputArray) === true) {
  console.log("Thanks!");
} else {
  console.log("Please input an array");
}

const checkBadData = findingBadData(inputArray);
const totalBadData = totalOfData(checkBadData);

/**
 * by this function we can sort the item of an array and put them into another array
 */

// Problem 5: Convert your gems into diamond
function gemsToDiamond(friend1Given, friend2Given, friend3Given) {
  const gemPowOfFriend1 = 21;
  const gemPowOfFriend2 = 32;
  const gemPowOfFriend3 = 43;

  const friend1Gem = gemPowOfFriend1 * friend1Given;
  const friend2Gem = gemPowOfFriend2 * friend2Given;
  const friend3Gem = gemPowOfFriend3 * friend3Given;

  const friendsTotalGem = friend1Gem + friend2Gem + friend3Gem;
  if (friendsTotalGem > 1000 * 2) {
    const covertDiamond = friendsTotalGem - 2000;
    return covertDiamond;
  } else {
    return friendsTotalGem;
  }
}
const friend1 = 20;
const friend2 = 200;
const friend3 = 50;
if ((typeof friend1, friend2, friend3 !== "number")) {
  console.log("Please input a number parameter");
}

const friendGem = gemsToDiamond(friend1, friend2, friend3);

/**
 * by this function we can convert a number by multiplying with some unite data
 * we can compare the total data with and an exact number. here i compare the data with the number of 2000.
 */
