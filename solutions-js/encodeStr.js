//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    temp = ''
    count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++
        }
        if (str[i] != str[i + 1]) {
            count++
            temp = temp + str[i] + count
            count = 0
        }
    }
    return temp
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//special note: can your function handle "g14f12"?

const decode = (str) => {
    var numbers = '01234567890'
    num = 0
    temp = ''
    for (i = 0; i < str.length; i++) {
        if (numbers.includes(str[i])){
            num = num + parseInt(str[i])
            console.log(num*str[i-1])
            num = 0
        }
    }
    return temp, num
}

console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));


// function repeatStringNumTimes(string, times) {
//     var repeatedString = "";
//     while (times > 0) {
//         repeatedString += string;
//         times--;
//     }
//     return repeatedString;
// }