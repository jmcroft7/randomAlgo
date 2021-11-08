// Print 1-55
const print1To255 = () => {
    for (i=1; i <= 255; i++) {
        console.log(i)
    }
}
print1To255();
console.log("=====");


// Print odds 1-255
const oddsTo255 = () => {
    for (i=1; i <=  255; i++) {
        console.log(i)
        i++
    }
}
oddsTo255();
console.log("=====");


// Sigma of 255
const sigma255 = () => {
    sum = 0
    for (i=1; i<=255; i++) {
        sum += i
    }
    console.log(sum)
}
sigma255();
console.log("=====");


// Iterating through an array
const iterateArr = (arr) => {
    for (i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arr1 = [1, 2, 3, 4, 5, 6]
iterateArr(arr1);
console.log("=====");


// Find max value in array
const findMax = (arr) => {
    maxVal = arr[0]
    for (i=0; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    console.log(maxVal)
}
findMax(arr1);
console.log("=====");


// Create an array consisting of only odds.
const oddArr = (num) => {
    temp = []
    for (i=0; i <= num; i++) {
        if (i % 2 !== 0) {
            temp.push(i);
        }
    }
    console.log(temp)
} 
oddArr(11);
