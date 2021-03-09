/**
 * https://www.hackerrank.com/challenges/diagonal-difference/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function diagonalDifference(arr) {
    // Write your code here
    let revArr=[];
    const calculateSum=(arr)=>{
        let sum=0;
        for (let i=0; i<=arr.length-1;i++) {
            for (let j=0; j <= arr[i].length-1; j++) {
                if (i===j) {
                    sum+=arr[i][j]
                }
            }
        }
        return sum;
    }

    const revArrFunc=(arr)=>{
        for (let i=0; i<=arr.length-1;i++) {
            let _=[];
            for (let j=arr[i].length-1; j>=0 ; j--) {
                _.push(arr[i][j])
            }
            revArr.push(_)
        }
        return calculateSum(revArr)
    }
    

    return Math.abs(calculateSum(arr)-revArrFunc(arr));
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

// a[0][0], a[1][1] a[2][2] && a[0][2] a[1][1] a[2][0]