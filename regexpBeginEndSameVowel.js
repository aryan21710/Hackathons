function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let vowels='aeiou'
    let s="uui";

     if (s.length >= 3) {
         s=s.toLowerCase()
        const output=vowels.split('').filter((_)=>{
        let pattern=`^${_}.*${_}$`
        let re=new RegExp(pattern,'g')
        return s.match(re)
        });
        re=output.length > 0 ? true : false
     }
    
    /*
     * Do not remove the return statement
     */
    return re;
}

console.log(regexVar())