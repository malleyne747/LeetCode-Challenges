/**
 * @param {string} s
 * @return {number}
 */


// The quick brown fox jumps over the lazy dog
var lengthOfLastWord = function(s) {
    
    if (s.length === 1) {return s.length;}
    let cleanedString = s.trim(); // remove whitespace from start amd end of string
    let listOfWordSubStrings = cleanedString.split(" "); //create an array of 'words' for each white space
    let lastWord = listOfWordSubStrings.pop(); // get last word in array of words
    return lastWord.length; 
};