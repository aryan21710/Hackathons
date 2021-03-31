const countBoomerangs=(arr)=>{
    let count=0;
    for (let i=0; i<=arr.length-1; i++) {
        const newArr=[];
        for (let j=i; j <= i+2 && j <= arr.length-1; j++) {
            newArr.push(arr[j])
        }
        if (newArr.length===3) {
            if (newArr[0]===newArr[newArr.length-1] && newArr[0]!== newArr[1])
            count = count+1;
        }

    }

    return count
}


console.log(countBoomerangs([5,5,5]))