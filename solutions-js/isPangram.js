//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//no built in functions!! toUpperCase is OK
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    const temp = str.toUpperCase()
    const obj = {}
    let count = 0

    for (i = 0; i < temp.length; i++) {
        if (temp[i] >= 'A' && temp[i] <= 'Z') {
            if (obj[temp[i]] != temp[i]) {
                obj[temp[i]] = temp[i]
                count++
            }
            else {
                obj[temp[i]] = temp[i]
            }
        }
    }
    return count === 26
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza.")); //returns true
// console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog")); //missing x, returns false
// console.log(isPangram("Sphinx of black quartz, judge my vow")); //returns true

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    const temp = str.toUpperCase()
    const obj = {}
    let count = 0

    for (i = 0; i < temp.length; i++) {
        if (temp[i] >= 'A' && temp[i] <= 'Z') {
            if (obj[temp[i]] != 1) {
                obj[temp[i]] = 1
                count++
            }
            else {
                return false
            }
        }
    }
    return count === 26
}

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog")); //should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP")); //should be true
// console.log(isPerfectPangram('Sphinx of black quartz, judge my vow')) //should be false