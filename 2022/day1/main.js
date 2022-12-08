const fs = require('fs')



let input = fs.readFileSync(__dirname + '/input.txt', 'utf8')
let elves = input.split('\n\n')                         // Splits the input into an array, separating each element whenever there's a double new line ('\n\n')
        .map(x => x.split('\n'))                        // Splits the array into an array of arrays, each subarray representing an elf
        .map(x => x.map(cal => cal = Number(cal)))      // The first map() iterates over each subarray, calling the second map() which then iterates over each subarray element, converting it from a string to a number

let totalCalories = elves.map(x => {                    // Iterates over the elves array (array of arrays of numbers),
    return x.reduce((acc,cv) => acc+cv,0)               // reducing each element (subarray) to one number by summing their numbers
})


//Part One Solution:
function mostCalories(){        
    return Math.max(...totalCalories)
}

//Part Two Solution:
function topThreeTotal(){
    const topThree = totalCalories.sort((a,b) => a-b).slice(-3)     // Sort the array of the elves' calories totals in ascending order, put the last three in a variable (as an array)

    return topThree.reduce((acc,cv) => acc+cv,0)                    // Get the sum of each array element, same as before

}
