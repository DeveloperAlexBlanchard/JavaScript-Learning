"use strict";

/////////////////////////////////////////////////////////////////////////
// let arr = ["a", "b", "c", "d", "e"];

// SLICE
// Does NOT mutate Array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// SPLICE
// DOES Mutate Array
// console.log(arr.splice(2));
// console.log(arr.splice(1, 2));
// console.log(arr.splice(2));

// REVERSE
// DOES Mutate Original Array
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());

// CONCAT
// Does NOT Mutate Array
// const letters = arr.concat(arr2);
// ^^^ Exact same thing as: console.log(...arr, ...arr2)
// console.log(letters);

// JOIN
// console.log(letters.join(" "));

// AT
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// Getting Last Array Element
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log("Alex".at(0));

/////////////////////////////////////////////////////////////////////////
// FOR EACH LOOP
// CANNOT break outside of a forEach loop, you CAN break outside of a for loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// ^^^ Same as this
// console.log("---- FOR EACH ----");
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

/////////////////////////////////////////////////////////////////////////
// MAP
// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Loop through name to get first letter of each name
// const user = "Steven Thomas Williams";

// const createUsernames = function (accs) {
// Use forEach instead of map because forEach modifies an array while map creates a new array, we want to modify
//   accs.forEach(function (acc) {
//     acc.username = acc.owner;
//     const username = user
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//     return username;
//   });
// };
// createUsernames(accounts);

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance(account1.movements);

// ^^ Below is exact same as above, but above is formatted better for simplicity
// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   })
//   .join("");
// console.log(username);

/////////////////////////////////////////////////////////////////////////////////////
// SET
// _ in JS means throwaway variable (unnecessary variable)
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (Julia, Kate) {
//   const JuliaCopy = Julia.splice(1, 2);
//   const dogsTogether = [...JuliaCopy, ...Kate];

//   for (let i = 0; i < dogsTogether.length; i++) {
//     if (i >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogsTogether[i]} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy :)`);
//     }
//   }

//   return dogsTogether;
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////////////////////////////////////////
// MAP METHOD

// const movements = [200, 51, -69, 874];
// const euroToUsd = 1.1;

// const movementsUSD = movements.map((mov) => (mov * euroToUsd).toFixed(2));
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

/////////////////////////////////////////////////////////////////////////////////////
// FILTER METHOD

// Filter returns all that meet expectations, while Find only returns the first one that matches
// Filter returns a new array, while Find only returns the element from the original array

// const movements = [200, 51, -69, 874];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// Array for Deposits
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// Array for Withdrawals
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

/////////////////////////////////////////////////////////////////////////////////////
// REDUCE METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Acculumator, Current, Index, Array
// Accumulator is a SNOWBALL, the current SUM of all previous values
// 0 is initial value of accumulator in first loop iteration (we start adding/counting at 0)
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(`Balance: ${balance}`);

// ^^^ But with Arrow
// const balance = movements.reduce((acc, curr) => acc + curr, 0);
// console.log(balance);

// BELOW GETS SAME RESULT JUST WRITTEN DIFFERENTLY
// BELOW ONLY USED IF NEED ONE LOOP
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum Value
// Acc keeps track of current sum, mov is current value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

/////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages 
to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Create Function
// const calcAverageHumanAge = function (ages) {
// 1. Calculate dogs age
// const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
// console.log(humanAges);
// 2. Exclude all dogs less than 18 human years old
// const adults = humanAges.filter((number) => number >= 18);
// console.log(adults);
// 3. Calculate average human age for all adult dogs
//   const averageAge =
//     humanAges.reduce((acc, age) => acc + age, 0) / adults.length;
//   console.log(Math.round(averageAge, 0));
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/////////////////////////////////////////////////////////////////////////////////////
// CHAINING METHODS
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Convert all deposits from Euro to USD
// Filter above 0 for deposits (under 0 is withdrawal)
// Map to create a new array for converted Euro's (now USD)
// Reduce the arrays numbers into one number
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD.toFixed(2));

/////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, index, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/////////////////////////////////////////////////////////////////////////////////////
// FIND METHOD
// Used to retrieve one element of the array based on a condition

// Filter returns all that meet expectations, while Find only returns the first one that matches
// Filter returns a new array, while Find only returns the element from the original array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')

/////////////////////////////////////////////////////////////////////////////////////
// FIND INDEX METHOD

/////////////////////////////////////////////////////////////////////////////////////
// SOME AND EVERY METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(450))

// SOME: CONDITION
// console.log(movements.some(mov => mov === -130))

// EVERY
// console.log(movements.every((mov) => mov > 0));

// Separate Callback
// const deposit = (mov) => mov > 0;
// console.log(movement.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Check if any deposits over $0 to account
// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// Check if any deposits over $5000 to account
// const fiveThousandDeposits = movements.some((mov) => mov > 5000);
// console.log(fiveThousandDeposits);

/////////////////////////////////////////////////////////////////////////////////////
// FLAT AND FLATMAP
// Introduced in 2019, very new concepts and will NOT work in very OLD browsers

// Groups all sub arrays into one array (ONLY GOES ONE DEEP)
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// If nested array inside nested array inside nested array, specify how deep to go
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// Combines a map AND a flat method into one method (better for performance
// If need to go deeper than 1, MUST use flat method

/////////////////////////////////////////////////////////////////////////////////////
// SORTING ARRAYS
// Mutates Original Array, ONLY works on strings

// Strings
// const owners = ["Alex", "Ruben", "Collin", "Ovi", "Gabriel"];
// console.log(owners.sort());

// Numbers
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// const numbers = [98, 7, 64, 108, 52, 9, 1];

// Lowest to Highest
// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );

// OR structure the above like this:
// console.log(numbers.sort((a, b) => a - b));

// Reverse so highest to lowest
// const reverseNumbers = [98, 7, 64, 108, 52, 9, 1];
// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// );

// OR structure the above like this:
// console.log(numbers.sort((a, b) => b - a));

/////////////////////////////////////////////////////////////////////////////////////
// FILL METHOD + EMPTY ARRAYS

// const x = new Array(7);
// x.fill(1);
// x.fill(1, 3);
// x.fill(1, 3, 5);
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.fill(23, 4, 6));

/////////////////////////////////////////////////////////////////////////////////////
// ARRAY.FROM METHOD

// Both new Array and Array.from produce EXACT same results, but Array.from is cleaner
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, index) => index + 1);
// console.log(z);

/////////////////////////////////////////////////////////////////////////////////////
// SUMMARY OF ALL ARRAY METHODS

// To Mutate Original Array
// Add to Original (.push)

/////////////////////////////////////////////////////////////////////////////////////
// PREFIXED ++ OPERATOR

// let a = 10;
// let b = 10;

// a++ increases from 10 to 11, but will return OLD value, while ++a returns NEW value
// console.log(a++);
// console.log(a);
// console.log(++b);

/////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion 
(see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion 
and add it to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs 
who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: 
"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

/* 1.) Loop over the array containing dog objects, and for each dog, calculate the recommended food portion 
and add it to the object as a new `property. Do NOT create a new array, simply loop over the array.  */
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

/* 2.) Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array. */
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

/* 3.) Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs 
who eat too little ('ownersEatTooLittle'). */
// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

/* 4.) Log a string to the console for each array created in 3., like this: 
"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!" */
