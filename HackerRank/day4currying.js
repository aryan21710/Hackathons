/**
 * https://www.hackerrank.com/contests/javascript-week2/challenges/js-currying
 */

 const greetings=(from)=> (message)=> (recipient)=>`Dear ${recipient},\n\t${message}\n${from}.`; 

 console.log(greetings('Jerry')("Happy Birthday!")('Tom'));	

function sum(...args) {
        function inner(...more) {
            return sum(...args,...more);
        }
        let total = args.reduce((a, b) => a+b, 0); 
        inner.toString = () => total; 
        
        return inner;
    }


// const sum=(n1)=>(n2)=>(n3)=>(n4)=>n1+n2+n3+n4;

// console.log(sum(1,2,3))
console.log(sum(1)(2)(2)(3)) // 8
//  console.log(sum(1,2)(2,3)) //8
