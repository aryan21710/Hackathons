/*
https://edabit.com/challenge/reR3jdfJnREauJj8d
*/

// mdn array.splice();
function sum(arr) {
    if (arr.length===0) {
        return 0
    } else {
        const newArr = arr.splice(0,1)
        return newArr.pop() + sum(arr)
    }
}


const arr=[5]
console.log(sum(arr))