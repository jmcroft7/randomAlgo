// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true
// ===========================
function isStrictPallindrome(str) {
    for (var i = 0; i <= Math.floor(str.length / 2); i++) {
        // if (str[i] === str[str.length - 1 - i])     // -1 accounts for the index. (str.length may equal 4 but index is 0 to 3)
        //     continue
        if (str[i] !== str[str.length - 1 - i])     // also works by itself
            return false
    }
    return true
}
// ===========================
// console.log(isStrictPallindrome("racecar"))     // true
// console.log(isStrictPallindrome("Dud"))         // false
// console.log(isStrictPallindrome("oho!"))        // false
// // ===========================
// console.log(isStrictPallindrome("(anna)"))      // false 
// console.log(isStrictPallindrome("(anna("))      // true
// ===========================


// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"
// ===========================
function longestPallindrome(str) {
    var newStr = ""
    for (var i = 0; i < str.length-1 ; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            if (isStrictPallindrome(str.slice(i,j)) === true) {
                if (str.slice(i,j).length > newStr.length){
                    newStr = str.slice(i,j)
                }
            }
        }
    }
    return newStr
}
// ===========================
console.log(longestPallindrome("my favorite racecar erupted"))  // should return 'e racecar e'
console.log(longestPallindrome("nada"))                         // should return 'ada'
console.log(longestPallindrome("nothing to see"))               // should return 'ee'