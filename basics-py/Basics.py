# Basic 13

# Print 1-55
def oneTo255():
    for i in range(1, 256, 1):
        print(i);

oneTo255();
print("=====");

# Print odds 1-255
def oddsTo255():
    for i in range(1, 256, 2):
        print(i);

oddsTo255();
print("=====");


# Sigma of 255
def sigma255():
    sum = 0
    for i in range(1, 256, 1):
        sum += i;
    print(sum);

sigma255();
print("=====");


# Iterating through an array
def IterateArray(arr):
    length = len(arr);
    for i in range(length):
        print(arr[i]);

arr1 = [1,2,3,4,5,6,7];
IterateArray(arr1);
print("=====");


# Find max value in array
def findMax(arr):
    length = len(arr);
    maxVal = arr[0];

    for i in range(length + 1):
        if (i > maxVal):
            maxVal = i;
    print(maxVal);

findMax(arr1);
print("=====");


# Create an array consisting of only odds.
def oddArray(num):
    oddArr = []
    for i in range(1, num + 1, 1):
        oddArr += [i]
    print(oddArr);

oddArray(10);
print("=====");
