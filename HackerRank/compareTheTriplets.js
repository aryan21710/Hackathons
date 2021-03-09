/**
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets(a, b) {
    
    let alicePoints=0, bobPoints=0;
    a.forEach((item,idx)=>{
        if (item > b[idx]) alicePoints++
        else if (item < b[idx]) bobPoints++
    })
    return [alicePoints,bobPoints]

}

console.log(compareTriplets([17,28,30],[99,16,8]));
