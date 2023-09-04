"use strict";
const prompt = require("prompt-sync")({ sigint: true });

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
// rep++;
// }
