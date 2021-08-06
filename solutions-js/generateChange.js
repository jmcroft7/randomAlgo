// given a number convert it into its equivalent change amout.
// example 4.17 --> 16 quarters, 1 dime, 1 nickel, 2 pennies
function generateCoinChange(input) {
    // object
        change = {
            'quarters': 0,
            'dimes': 0,
            'nickels': 0,
            'pennies': 0
        }
    
        input *= 100
    
            change['quarters'] = Math.floor(input / 25)
            input = input % 25
    
            change['dimes'] = Math.floor(input / 10)
            input = input % 10
    
            change['nickels'] = Math.floor(input / 5)
            input = input % 5
    
            change['pennies'] = input
    
        return change
    }
    
    console.log(generateCoinChange(3.00))
    console.log(generateCoinChange(4.17))
    console.log(generateCoinChange(0.77))