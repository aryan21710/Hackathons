reverseString=(s)=> {
    console.log('THE STRING INPUTTED IS',s,':',typeof s);
    try {
            s=s.split();
            console.log('s',s);
            let output=[];
            for(let i=s[0].length-1; i >= 0; i--) {
                console.log('s[i]',s[i])
                output=output.concat(s[0][i])
            }
            console.log(output.join(''))
        
    }
        
    catch(err) {
        console.log('inside catch block')
        console.log(err.message);
        console.log(s)
    }

}





console.log(reverseString(1234))