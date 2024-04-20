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




//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
//Take a number, n, and print every number between 1 and n without using loops. Use recursion.