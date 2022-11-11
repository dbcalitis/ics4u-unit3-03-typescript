/**
 * The program gives the index of the given numbers
 * in the randomly generated array.
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-11-10
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * binarySearch.
 *
 * @param {number[]} nums array of numbers.
 * @param {number} target the given number.
 * @param {number} lowIndex the lowest index.
 * @param {number} highIndex the highest index.
 * @returns {number} the index.
 */
function binarySearch(
  nums: number[],
  target: number,
  lowIndex: number,
  highIndex: number
): number {
  // Base Condition
  if (lowIndex > highIndex) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((lowIndex + highIndex) / 2)

  // Compare mid with given key x
  if (nums[middle] === target) {
    return middle
  }

  // If element at mid is greater than x,
  // search in the left half of mid
  if (nums[middle] > target) {
    return binarySearch(nums, target, lowIndex, middle - 1)
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    return binarySearch(nums, target, middle + 1, highIndex)
  }
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input
console.log('Binary Search Program')

console.log('Sorted list of numbers: ')

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  process.stdout.write(`${String(randomNumberArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt(
    'What number are you searching for in the array (integer between 0 and 999): '
  )
)

// Process and Output
console.log(
  `Your number is in index: ${binarySearch(
    randomNumberArray,
    numInput,
    0,
    ARRAY_SIZE - 1
  )}`
)

console.log('\nDone.')
