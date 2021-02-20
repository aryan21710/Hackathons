const moment = require('moment');
const months=[]
moment.months().forEach((month)=>months.unshift(month))
generateMonth = () => {
    // date-fns each day function is deprecated. This looks like the most efficent way to
    // populate the number of months.
    let cnt = 0;
    const listOfMonths = [];
    for (let i = 2019; i > 2010; i--) {
        for (let j = months.length - 1; j >= 0; j--) {
            listOfMonths.push({
                id: String(cnt),
                month: months[j] + ' ' + String(i)
            });
            cnt++;
        }
    }
    console.log('listOfMonths',listOfMonths);
    return listOfMonths;
};

generateMonthWithoutNestedLoop=()=>{
    const startYear=2010;
    let currentYear= new Date().getFullYear();
    return new Array(currentYear-startYear).fill(0).map((_)=>{
         return currentYear--;
    }).reduce((agg,year)=>[...agg, ...months.map((month)=> `${month} ${year}`)],[]).map((_,idx)=> {return {id : idx, month: _}})
   
}


console.log('generateMonth:-',generateMonth());
console.log('*'.padEnd(10,'*'));
console.log('generateMonthWithoutNestedLoop:-',generateMonthWithoutNestedLoop());