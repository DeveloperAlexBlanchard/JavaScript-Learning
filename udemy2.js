"use strict";
const prompt = require("prompt-sync")({ sigint: true });
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// Arrays use when you need ordered list of values or need to manipulate data
// tasks = ['Code', 'Eat', 'Code'];

// Sets use when working with unique values, high-performance is REALLY important
// tasks = new Set(['Code', 'Eat', 'Code']);

// Objects use for key/value store, easier to write and access values with . and []
// task = {
//   task: 'Code',
//   date: 'today',
//   repeat: true,
// }

// Maps use for better performance, keys can have any data type, easy to iterate and to compute size
// task = new Map([
//   ['task', 'Code'],
//   ['date', 'today'],
//   [false, 'Start coding!'],
// ]);

// push     puts a variable at the end of an array
// shift    removes a variable at the beginning of an array
// unshift  puts a variable at the beginning of an array
// pop      removes a variable at the end of an array
// indexOf  returns value position of a number/string
// includes returns true if an array contains a specified value (ex: if years has 2004 in its array, it returns true, else false)

// const alex = {
//     firstName: 'Alex',
//     lastName: 'Blanchard',
//     birthYear: 2001,
//     age: 22,
//     job: 'Sales Advisor',
//     videoGame: 'Halo',
//     friends: ['Michael', 'Steven', 'Perry'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         return 2037 - this.birthYear;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
// }

// alex.location = 'Canada';
// alex['twitter'] = '@alexblanchard1.0';
// alex.bestFriend = 'Michael';
// console.log(`${alex.firstName} has ${alex.friends.length} friends and his best friend is ${alex.bestFriend}!`);
// console.log(alex.getSummary());

// const alexArray = [
//     'Alex',
//     'Blanchard',
//     2037 - 2001,
//     'Sales Advisor',
//     ['michael', 'peter', 'steven'],
// ]
// for(let i = 0; i < alexArray.length; i++) {
//     console.log(alexArray[i])
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// if (typeof alex[i] == 'number) break/continue;

// How to Reverse a Loop
// for(let i = alex.length - 1; i >= 0; i--)

// How to Loop inside a Loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------ Starting Exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting Weight Repetition ${rep}`)
//     }
// }

// How to While Loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting Weights Repetition ${rep}`);
//     rep++;
// }

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
//     will be delivered to ${address} at ${time}.`);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLOSURES

// A closure makes a function remember all the variables that existed at the function's return function

// [[]] in console means the variable is an internal property that cannot be accessed from code

// passengerCount is only read the first time the function is called
// After that, whenever secureBooking is called, it only does code inside return function
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// Re-assigning f function
// h();
// f();

// Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 5);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

// WRONG
// const runOnce = function() {
//   console.log('This will never run again')
// }
// runOnce();

// RIGHT
// Wrap Function in paranthesis to run only once, NOT saving it to a variable
// (); at the end calls to the console
// (function () {
//   console.log("This will never run again");
// })();

// Also works for Arrow Function
// (() => console.log("This will never run again"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Manually set "This" keyword

// const southwest = {
//   airline: "SouthWest",
//   iataCode: "SW",
//   bookings: [],
// Below is the new way, old way was - book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// southwest.book(239, "Alex");
// southwest.book(635, "John Smith");

// const delta = {
//   airline: "Delta Airlines",
//   iataCode: "DA",
//   bookings: [],
// };

// Possible because JavaScript has first class functions, so we can take this function value (book)
// Then store it into a new variable (const book)
// const book = southwest.book;

// Does NOT work because of this method
// console.log(book(23, "Sarah Williams"));

// DOES work with this method
// Call method, then delta being the first in, allows us to manually set the "this" function to what we want to call
// (We set this method from southwest to delta)
// book.call(delta, 23, "Sarah Williams");
// console.log(delta);
// book.call(southwest, 239, "Mary Cooper");
// console.log(southwest);

// Apply Method, no longer used as much, now replaced with call function as below
// const flightData = [583, "George Cooper"];
// book.apply(delta, flightData)
// console.log(delta)

// Call method replaces Apply method in modern javascript
// book.call(delta, ...flightData);
// console.log(delta);

// Bind method
// Does not immediately call a function but rather returns a
// new function where "this" keyword is set to whatever value we pass into bind
// const bookSW = book.bind(southwest);
// const bookDA = book.bind(delta);
// bookSW(23, "Steven Williams");
// bookDA(34, "Mary Jinkers");

// Book function needed 2 inputs, but now it only needs 1 because we are presetting the "flightNum" to always be 23
// const bookSW23 = book.bind(southwest, 23);
// bookSW23("Alex Blanchard");
// bookSW23("Martha Cooper");

// With Event Listeners
// southwest.planes = 300;
// southwest.buyPlane = function() {
//   console.log(this)
//   // In HTML, when pressing the "buy new plane" button, add one
//   this.planes++
//   console.log(this.planes)
// }
// document.querySelector('.buy').addEventListener('click', southwest.buyPlane.bind(southwest));

// Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// Use bind function to preset tax so it is always the same
// First argument for bind is ALWAYS "this" keyword, if "this" wasn't used in AddTax, then use null
// const addVAT = addTax.bind(null, 0.09375);
//Bind changes addVAT to: addVAT = value => value + value * rate;
// console.log(addVAT(59))

// EXAMPLE PROBLEM FOR FUNCTIONS RETURNING FUNCTIONS
// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addValue = addTax(0.09375);
// console.log(addValue(239.99));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions Returning Functions

// This works because of closures
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Alex");
// greeterHey("Steven");
// greet("Hello")("Alex");

// Redo this but with Arrow Functions
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr("Hi")("Alex");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Higher Order Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// Higher-Order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}\n`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Primitive Types and Reference Types

// const flight = "LH234";
// const alex = {
//   name: "Alex Blanchard",
//   passport: 2973826378,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 2973826378) {
//     console.log("Checked in");
//   } else {
//     console.log("Wrong passport");
//   }
// };
// checkIn(flight, alex);
// console.log(flight);
// console.log(alex);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default Parameters

// const bookings = [];

// ES6
// Set default values in the function parenthesis
// const creatingBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// ES5
// numPassengers = numPassengers || 1;
// price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// creatingBooking("LH123");
// creatingBooking("LH123", 2, 800);
// creatingBooking("LH123", 2);
// creatingBooking("LH123", 5);
// creatingBooking("LH123", undefined, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STRINGS PART 3

// Split Function
// console.log("a+very+nice+string".split("+"));
// console.log("Alex Blanchard".split(" "));
// const [firstName, lastName] = "Alex Blanchard".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };
// capitalizeName("jessica ann smith davis");
// capitalizeName("alex blanchard");

// Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));

// Real World Example: Credit Card Masking
// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(4337685106897293));

// Repeat
// const message2 = 'Bad Weather... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// };
// planesInLine(5);

/// EXAMPLE PROBLEM ///
// const flights =
// "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replace(
//     /_/g,
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STRINGS PART 2

// Replace creates a brand new string, does NOT mutate original one

// Change string to lower case or upper case
// const airline = "TAP Air Portugal";
// console.log(airline.toLowerCase());
// console.log('alex'.toUpperCase());

// Fix Capitalization in name
// const passenger = "aLeX";
// const passengerLower = passenger.toLowerCase();

// Change 'alex' to 'Alex'
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing emails
// const email = 'hello@alex.io'
// const loginEmail = ' Hello@Alex.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// ^^ Do all that in one line
// const normalizedEmail = loginEmail.toLowerCase().trim();

// Replacing, first argument is being replaced (£) and second is what replacing with ($)
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = "A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));
// console.log(plane.startsWith("A"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

// Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a Laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STRINGS PART 1

// Strings cannot be mutated, they are primitive
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(airline.length);
// console.log("B737".length);

// Get position of certain letter in a string
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));

// Slice string, for example this slices in position 4, for TAP (position 1-3) is taken out
// Because it is not saved to a variable, this returns a NEW string, while 7 cuts out the
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("LMAO BITCH ASS GOT A MIDDLE SEAT AHAHAHAHAHA");
//   } else {
//     console.log("You got Lucky");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String('alex'));
// console.log(typeof new String('alex'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAPS: ITERATIONS

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "Python"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct :)"],
//   [false, "Incorrect :("],
// ]);
// console.log(question);

// Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz App
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("Your Answer: "));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAPS: FUNDAMENTALS

// Map is a data structure used to map values to keys
// Data is stored is key value pairs in maps
// Difference between Object and Map is Map keys can have any type, while in Objects, keys are always strings

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenza, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// If time is the current time, see if restaurant is currently open or closed
// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// Other keywords to use with MAPS
// Delete operator is slow process and typically not encouraged
// console.log(rest.has("categories"));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));
// console.log(rest.size);

// Remove all Elements from Map
// rest.clear();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SETS

// CANNOT get values out of a set because sets do NOT have indexes

// Sets remove duplicates
// const OrdersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(OrdersSet);

// Separate string word into letters
// console.log(new Set("Alex"));

// How many variables are inside the set
// console.log(OrdersSet.size);

// Check if element is in a set
// console.log(OrdersSet.has("Pizza"));
// console.log(OrdersSet.has("Bread"));

// Add Elements to a Set
// OrdersSet.add("Garlic Bread");
// OrdersSet.add("Garlic Bread"); // If you try to add a duplicate, only one is added

// Delete elements from a Set
// OrdersSet.delete("Risotto");

// Loop through a Set
// for (const order of OrdersSet) console.log(order);

// Convert Set to Array
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Find Number in Set without variable
// console.log(new Set('alexblanchard').size);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PROPERTY NAMES

// Assign keys from openingHours dictionary to variable properties
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// Dictionary for value because it is an object, we can destructure for the info of both open and close times
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING

// WITHOUT Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.thu) {
//   console.log(restaurant.openingHours.thu.open);
// }

// WITH Optional Chaining
// Only if property that is before the question mark (only if thursday exists),
// then open property will be read if not, then immediately undefined will be returned
// console.log(restaurant.openingHours.thu?.open);

// EXAMPLE of Optional Chaining
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day} we open at ${open}`);
// }

// METHODS work on Optional Chaining
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // Method exists
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method doesn't exist

// ARRAYS work on Optional Chaining
// If users exist, then only take its name, else return 'User Array Empty'
// const users = [{ name: "Alex", email: "hello@alex.com" }];
// console.log(users[0]?.name ?? "User Array Empty");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPERATORS

// Logical Operators can use any data type, return any data date, can do short circuiting
// || Operator returns a truthy value first, && operator returns a falsy value first
// Nullish Operator (??) works like the above operators, but instead of truthy or falsy, it's null values

// const rest1 = {
//   name: "Capri",
//   numGuests: 20,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Both rest1 and rest2 lines are the exact same, just formatted differently
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator, only do if one value is 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// Both rest1 and rest2 lines are the exact same, just formatted differently
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SHORT CIRCUITING

// Short circuiting means if the first value is truthy,
// it returns the first value only and not even take a look at the second value
// console.log(undefined || "Alex");
// console.log("" || "Alex");
// console.log(true || 0);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// If restaurant.numGuests exists, keep its value, else assign a value of 10
// Guests1 and Guests2 both do the same function, but can be written differently
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;

// Nullish: null and undefined (NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DESTRUCTURING

// SPREAD, because on RIGHT side of = operator
// const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1? `),
//   prompt(`Ingredient 2? `),
//   prompt(`Ingredient 3? `),
// ];

// All user prompts are added to order pasta
// restaurant.orderPasta(...ingredients);

// Objects
// Add Objects to dictionary
// const newRestaurant = {
//   ...restaurant,
//   founder: "Papa John",
//   cofounder: "Little Caesar",
//   foundedIn: "1927",
// };

// Change values in dictionary in another object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onions", "olives", "bacon");
// restaurant.orderPizza("mushrooms");

// const arr = [7, 8, 9];
// const badNewArr = [3, 4, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];

// const newMenu = [...restaurant.mainMenu, "Gnocci"];

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more Arrays Together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: Arrays, Strings, Maps, Sets but NOT Objects
// const str = "Alex";
// const letters = [...str, " ", "B."];
// console.log(letters);
// console.log(...str);

// Default Values for Order Delivery, unless the function above overrides them
// restaurant.orderDelivery({
//   time: "10:30",
//   address: "Via de Sole, 21",
//   mainIndex: "2",
//   starterIndex: 2,
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DICTIONARIES

// Same way to get values from dictionary, but structured differently
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// console.log(restaurant.name, restaurant.openingHours, restaurant.categories);

// Variables from restaurant are now renamed
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// Default Values, to combine both menus into one
// We use [] to set a default value if there is no current value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// Assign a from 111 to 23 and assign b from 999 to 7
// Must wrap in paranthesis because if line of code starts with {} javascript will think its a function
// and expect a code block, thus returning an error message
// ({ a, b } = obj);
// console.log(a, b);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NESTED OBJECTS

// Nested Objects, grab one value from multiple values in a dictionary
// The reason open and close have values is for efficiency, it is faster
// for the computer to grab "o" and "c" because they can just grab the variable,
// If you call "open" or "close" then the machine has to find the dictionary,
// Find opening days, friday, and then the value inside
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// How to grab values from an array inside an array
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// How to nested de-structure an array
// const [a, , [b, c]] = nested;
// console.log(a, b, c);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DE-STRUCTURING

// Set default values when de-structuring an array, an undefined value will keep their value as 1 unless told otherwise
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Second comma skips the second item in mainMenu, only includes first and third menu items in const.
// let [first, , third] = restaurant.mainMenu;
// console.log(third);

// Reverse first and third variables, instead of Pizza Risotto it now says Risotto Pizza
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);

// Better way to switch first and third variables around
// [first, third] = [third, first];
// console.log(first, third);
