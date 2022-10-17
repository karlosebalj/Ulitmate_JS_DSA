/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// 1. SOLUTION - Chaining in-built methods
function reverseString(text) {
    return text.split('').reverse().join('');
}

// function reverseString(text) {
//     return [...text].reverse().join('');
// }

// 2. SOLUTION - Using a for loop
function reverseString(text) {
    let result = "";

    for (let i = text.length - 1; i >= 0; --i) {
        result += text[i];
    }
    return result;
}

// function reverseString(text) {
//     let result = "";

//     // each character that we are looping through we are appending it to
//     // the start string
//     for (const char of object) {
//         result = char + result;
//     }

//     return result;
// }

// 3. SOLUTION - Recursion Method
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0];
    }
}

// 4. SOLUTION - Using reduce
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, "");
}




module.exports = reverseString