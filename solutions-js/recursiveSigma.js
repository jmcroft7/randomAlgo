// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function recursiveSigma(num) {
    if(num === 1) {
        return 1
    }
    return num + recursiveSigma(num - 1)
}


// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 
// 1*3*5

function recursiveFactorial(num) {
    if (num === 1) {
        return 1
    }
    return  recursiveFactorial(num - 1) * num
}



console.log(recursiveSigma(5))
console.log(recursiveFactorial(5))