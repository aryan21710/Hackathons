function miniMaxSum(arr) {
    const max=arr.indexOf(Math.max(...arr));
    const min=arr.indexOf(Math.min(...arr));
    const minSumArr=arr.filter((_,idx)=>idx !== max).reduce((acc,init)=>acc+init);
    const maxSumArr=arr.filter((_,idx)=>idx !== min).reduce((acc,init)=>acc+init);
    console.log(minSumArr,maxSumArr)
}


miniMaxSum([5,5,5,5,5])