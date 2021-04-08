/**
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */


function plusMinus(arr) {
    let posRatio=0, negRatio=0, zeroRatio=0;
    arr.forEach((item)=>{
        if (item > 0) posRatio++
        else if (item <= -1) negRatio++
        else if (item===0) zeroRatio++
    })
    const newArr=[(posRatio/arr.length).toFixed(6),(negRatio/arr.length).toFixed(6),(zeroRatio/arr.length).toFixed(6)]

     console.log(newArr.join('\n'))

}



plusMinus([1,2,3,-1,-2,-3,0,0
])