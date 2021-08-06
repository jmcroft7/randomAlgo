//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    const newArr = []
    //    leftArr = [1,2,7,9]           rightArr = [0,3,4,6,11]
    for (var i = 0; i <= rightArr.length || i <= leftArr.length; i++) {

        //      2,3     
        if (leftArr[i] < rightArr[i]) {
            newArr.push(leftArr[i])

            if (leftArr[i + 1] > rightArr[i]) {
                newArr.push(rightArr[i])
            }
        }

        // 0,1          4
        if (leftArr[i] > rightArr[i]) {
            newArr.push(rightArr[i])

            if (leftArr[i] < rightArr[i + 1]) {
                newArr.push(leftArr[i])
            }
            // 7 is greater than 4 and r(i+1) 6
            else {
                newArr.push(leftArr[i])
            }
        }
    }
    return newArr
}

//should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1, 2, 7, 9], [0, 3, 4, 6, 11]));


// index 3 
// 7            4

//    leftArr = [1,2,7,9]           rightArr = [0,3,4,6,11]
// index 0      1 vs 0
// 0, 1,
// index 1      2 vs 3
// 2, 3
// index 2      7 vs 4
// 4
// index 3      9 vs 11
// 