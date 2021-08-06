// Implement reverseString(str) that take in a String, and then return a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!
// example string "Hello"
var revString = ""
function reverseString(str) {
    for (var i = str.length - 1; i >= 0; i--){
        revString = revString + str[i]
    }
    console.log(revString)
}

reverseString("Hello")

// ===========================
// ===========================

// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""
// .length doesnt account for words only letters
// .type doesnt account for spaces if (" ") does account for spaces
//  can create a new variable including only uppercase, but doesnt get only first letters. "GeOrGe"
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function acronym(str) {
    for (var i = 0; i < str.length; i++){
        if (upperCase.includes(str[i])){
            console.log(str[i])
        }
    }
}
acronym("Hello My Name Is George")
acronym("HELLO My Name Is George")


function acronym2(str) {
    var acro = "";
    for (var i = 0; i < str.length; i++) {
        if (i === 0) {
            acro += str[i]
        }
        if (str[i] == " "){
            acro += str[i+1]
        }
    }
    return acro;
}
console.log(acronym2("Hello My Name Is George"))
console.log(acronym2("HELLO My Name Is George"))