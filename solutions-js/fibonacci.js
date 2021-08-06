// fibonacci sequence 

// [0] [1] [2] [3] [4] [5]   [6]   [7]  [8]  [9]
//  0,  1,  1,  2,  3,  5,    8,   13,  21,  34
//                            _
//                 -2  -1    num

function Fibonacci(num) {

    if (num <= 1){
        return num
    }
    // if (num === 0)
    //     return 0
    // if (num === 1) use else if instead of double if statements
    //     return 1

    return Fibonacci(num - 1) + Fibonacci(num - 2)
}


console.log(Fibonacci(7))
console.log(Fibonacci(9))