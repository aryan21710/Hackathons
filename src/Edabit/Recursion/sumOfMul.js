const sumOfMul=(num,count)=>{
    if (count===0) {
        return 0;
    } 
        return  num * count + sumOfMul(num,count-1);
    
}

console.log(sumOfMul(1,3));

/**
 * 7
 * 7*1 + 7*2 + 7 * 3
 * 7 * 10 +  sumOfMul(7) * 9
 * 7 * 10 +  7 * 9 +  7 * 1
 */