/**
 * https://www.hackerrank.com/challenges/a-very-big-sum/problem?h_r=next-challenge&h_v=zen
 */

function aVeryBigSum(ar) {
    return ar.reduce((acc,init)=>{
        return acc+init
    },0)

}


console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]))