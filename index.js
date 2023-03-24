// Randomly generates in your console an algorithm and a coding language to do that algorithm in!
// A solution to each algo is included in 'solutions-js' folder
const randomAlgo = () => {

    // add or remove languages as you know
    let languages = ["JavaScript", "Python", "Java"]


    // add more algos with this format
    // n: "Title \n Description \n example"
    let algos = {

        0: "reverseString \n take in a String, and then return a string of the same length, but with the characters reversed. \n 'creature' ---> 'erutaerc' ",

        1: "parensValid \n given an input string, returns a boolean true/false whether parentheses in that string are valid. \n 'y(3(p)p(3)r)s' --> true \n 'n(0(p)3' --> false ",

        2: "isPallindrome \n Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters \n 'racecar' --> true \n 'oho!' --> false",

        3: "bookIndex \n given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges. \n [1,3,4,5,7,8,10,12] --> '1, 3-5, 7-8, 10, 12'",

        4: "generateChange \n given a decimal number convert it into its equivalent change amout. \n 4.17 --> 16 quarters, 1 dime, 1 nickel, 2 pennies",

        5: "recursiveSigma \n given a number, recursively returns the sum of integers from one up to that given number \n given 5 would return 1+2+3+4+5 == 15",

        6: "fibonacci \n Given a number N return the index value of the Fibonacci sequence, where the sequence is: \n given 8 would return [1, 1, 2, 3, 5, 8, 13, 21, 34]",

        7: "sortCombine \n combine two pre-sorted arrays into one sorted array; return the newly combined array \n [1,2,7,9], [0,3,4,6,11] --> [0,1,2,3,4,6,7,9,11]",

        8: "partitionArr \n partition the array around the value at arr[0]; values left of the original pivot should be less than the pivot, values right of the pivot should be greater than the pivot value. each side of the partitioned value does not have to be sorted. \n [5,4,9,2,5,3] --> [4,2,3,5,9,5]",

        9: "stringToWord \n given a string of words(with spaces) return an array of individual words \n 'Did I shine my shoes today?' --> ['Did','I','shine','my','shoes','today?']",

        10: "rotateString \n Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. \n 'Did I shine my shoes today?', 9 -> es today?Did I shine my shoe' ",

        11: "removeDups \n Remove duplicate characters(case-sensitive) including punctuation. Keep only the last instance of each character \n 'Snaps! crackles! pops!' -> 'Snrackle ops!'",

        12: "encodeStr \n You are given a string that may contain sequences of consecutive characters. shorten a string by including the character, then the number of times it appears \n 'aaaabbcddd' return 'a4b2c1d3'",

        13: "isPangram \n Write a function to return if a string contains at least one of every letter(not case sensitive) \n (The quick brown fo jumps over the lazy sleeping dog); //missing x, returns false" //dont forget comma!

        // update here

    }

    let randAlgo = Math.round(Math.random() * Object.keys(algos).length)
    let randLang = Math.round(Math.random() * (languages.length - 1))

    return `code in: ${languages[randLang]} \n Algo #${randAlgo}: ${algos[randAlgo].toString()}`
}

console.log(randomAlgo())