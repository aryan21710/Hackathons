/**
 * https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/micro-and-array-update/
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
  })