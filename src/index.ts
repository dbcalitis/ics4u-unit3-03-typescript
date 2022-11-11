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
 * @returns {number} the index.
 */
function binarySearch(nums: number[], target: number): number {
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    const middle: number = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
      return middle
    }

    if (target < nums[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.round(Math.random() * MAX + MIN)
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
  `Your number is in index: ${binarySearch(randomNumberArray, numInput)}`
)

console.log('\nDone.')
