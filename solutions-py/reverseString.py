# Implement reverseString(str) that take in a String, and then return a string of the same length, but with the characters reversed.
# Example: "creature" ---> "erutaerc"

# ** Don't use the built-in method!
# example string "Hello"

def reverseString(str):
    newStr = ""
    idx = len(str) -1

    while idx >= 0:
        newStr += str[idx]
        idx-=1

    return str + " --> " + newStr





print(reverseString("creature"))