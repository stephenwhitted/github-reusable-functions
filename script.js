console.log("Let's create some reusable functions!")
///////////////////////Reusable Functions ////////////////////////////////////////////////////////////////////

////////////////////////////Part 1///////////////////////////////////
/*


*

*/
// 1a Take an array of numbers and return the sum.
//
const numbers = [2, 4, 8, 16, 32, 64, 128, 256];


function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}


console.log(sumArray(numbers)); // Outputs: 510 as the sum

/////////////////////////////////////////////////////////////////////////////////


//1b Take an array of numbers and return the average.
const numbers2 = [2, 4, 8, 16, 32, 64, 128, 256];


function sumArray2(numbers2) {
    return numbers2.reduce((acc, num) => acc + num, 0);
}


function avgArray2(numbers2) {
    if (numbers2.length === 0) return 0;  
    return sumArray2(numbers2) / numbers2.length;
}

const average = avgArray2(numbers2);
console.log(average); //63.75 as the avg

///////////////////////////////////////////////////////////////////////////

//1c Take an array of strings and return the longest string.
const str = ['please', 'wake', 'me', 'up', 'at', 'breakfast'];

function longString(str) {
    if (str.length === 0) return "";
    let longest = str[0];
    
    for (let i = 1; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i]; 
        }
    }
    
    return longest; // 
}

const longestString = longString(str);
console.log(longestString); // Outputs: "breakfast" as the longest string




//1d Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const phrases = ['please', 'wake', 'me', 'up', 'at', 'breakfast'];

// filter strings based on specified minimum length (4)
function filterByLength(words, minSize) {
    return words.filter(word => word.length > minSize);
}

const longWords = filterByLength(phrases, 4);
console.log(longWords); // Should output: ['please', 'breakfast']


//1e Take a number, n, and print every number between 1 and n without using loops. Use recursion.


// Function to print numbers from 1 to n
function printNew(n) {
    if (n > 0) {
        printNew(n - 1); // Recursive call to print numbers before n
        console.log(n + " "); // Print the current number
    }
    return;
}

const n = 10; // Use `const` if `n` is not going to change
printNew(n); // Call the function with n = 10
//outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

////////////Part 2///////////////////////////////////////////////////////////////////////////////////
/* 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }] */




const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
//2a Sort the array by age.
function sortByAge(peopleArray) {
    return peopleArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
}

console.log("Sorted by Age:", sortByAge([...people]));
/*Output
Sorted by Age: 
(5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19'}
1
: 
{id: '48', name: 'Barry', occupation: 'Runner', age: '25'}
2
: 
{id: '42', name: 'Bruce', occupation: 'Knight', age: '41'}
3
: 
{id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'}
4
: 
{id: '7', name: 'Bilbo', occupation: 'None', age: '111'}
length
: 
5
[[Prototype]]
: 
Array(0)
*/

//////////////////////////////////////////////////////////////////////////////////////////////
//2b Filter the array to remove entries with an age greater than 50.
const fiftyPlus = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

function filterByAge2(fiftyPlusArray) {
   
    return fiftyPlusArray.filter(person => parseInt(person.age) <= 50);
}

console.log("Filtered People (Age <= 50):", filterByAge2(fiftyPlus));
/* Output
Filtered People (Age <= 50): 
(3) [{…}, {…}, {…}]
0
: 
{id: '42', name: 'Bruce', occupation: 'Knight', age: '41'}
1
: 
{id: '48', name: 'Barry', occupation: 'Runner', age: '25'}
2
: 
{id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19'}
length
: 
3
[[Prototype]]
: 
Array(0)
*/

////////////////////////////////////////////////////////////////////////////////////////////
//2c Map the array to change the “occupation” key to “job” and increment every age by 1.

const ppl = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// change 'occupation' to 'job' and increment 'age'
function updatePpl(ppl) {
    return {
        id: ppl.id,
        name: ppl.name,
        job: ppl.occupation,  // 'occupation' to 'job'
        age: String(parseInt(ppl.age) + 1)  // age +1 
    };
}

const updatedPeople = ppl.map(updatePpl);

console.log("Updated People:", updatedPeople);
/* Output
Updated People: 
(5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{id: '42', name: 'Bruce', job: 'Knight', age: '42'}
1
: 
{id: '48', name: 'Barry', job: 'Runner', age: '26'}
2
: 
{id: '57', name: 'Bob', job: 'Fry Cook', age: '20'}
3
: 
{id: '63', name: 'Blaine', job: 'Quiz Master', age: '59'}
4
: 
{id: '7', name: 'Bilbo', job: 'None', age: '112'}
length
: 
5
[[Prototype]]
: 
Array(0)  */

///////////////////////////////////////////////////////////////////////////////////////////////
//2d Use the reduce method to calculate the sum of the ages.
const peeple = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// reduce function
function sumAges(total, person) {
    return total + parseInt(person.age);
}

const totalAge = peeple.reduce(sumAges, 0);
console.log("Total Age Sum:", totalAge);
// Output: Total Age Sum: 254





///////////////////////////////////////////////////////////////////////////////////////////////
//2e Then use the result to calculate the average age.

const averageAge = totalAge / peeple.length;
console.log("Average Age:", averageAge);

//output: Average Age: 50.8
/////////////Part 3/////////////////////////////////////////////////////////////////////////////////
