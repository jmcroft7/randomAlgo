//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my shoe"
const rotateString = (str, num, dir) => {

    if (dir === 'right' || dir == null) {
        tempStr = ''
        tempNum = num
        newStr = ''
        finalStr = ''

        for (let i = str.length - 1; tempNum > 0; i--) {
            tempStr += str[i]
            tempNum--
        }

        for (let i = 0; i < str.length - num; i++) {
            newStr += str[i]
        }

        for (let i = tempStr.length - 1; i >= 0; i--) {
            finalStr += tempStr[i]
        }

        finalStr += newStr
        return finalStr


    } else if (dir === 'left') {
        var temp = ''
        var result = ''

        for (i = 0; i < str.length; i++) {
            if (i < num) {
                temp = temp + str[i]
            }
            if (i >= num) {
                result = result + str[i]
            }
        }
        return result + temp
    }
}



let testString = "012345";
console.log(rotateString(testString, 2, 'left'));
console.log(rotateString(testString, 2));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9, 'left'));
console.log(rotateString(shoes, 9));




//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
// const isRotation = (str1, str2) => {
// }

// console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"))