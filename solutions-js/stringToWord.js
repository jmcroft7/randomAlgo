//given a string of words(with spaces),
//return an array of words
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let temp = '';
    let arr = []
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== '' && str[i] != null) {
            temp += str[i]
        }
        else if (str[i] == '' || str[i] == null) {
            arr.push(temp)
            temp = ''
        }
    }
    return arr
}

console.log(stringToWordArray("Did I shine my shoes  today?"));
console.log(stringToWordArray("two             words"));

// //write a function that, given a string of words(with spaces),
// //returns a new string with words in reverse sequence.
// //"This is a test" -> "test a is This"
// const reverseWordOrder = (str) => {

// }

// console.log(reverseWordOrder("This is a test"));
// console.log(reverseWordOrder("A man a plan a canal Panama"));