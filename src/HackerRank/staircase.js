function staircase1(n) {
    const createSpaceAndHashArr=(count,elem)=>{
        let output=''
        for (let i=0; i<=count-1;i++) {
            output+=elem
        }
        return output
    }
    let output=[];
        for (let j=0; j <= n-1; j++) {
            let arr;
            arr=createSpaceAndHashArr(n-1-j,' ')+createSpaceAndHashArr(j+1,'#');
            j < n-1 ? output.push(arr+'\n') : output.push(arr)
        }    
    console.log(output.join(''))

}



// staircase(3)
const staircase=(n)=>{
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}


staircase(3)
