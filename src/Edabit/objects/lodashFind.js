const find = (...args) => {
	const arr = args[0];
    let searchElem = args[1]; 
    const findObjInArr=(arr,searchElem)=>{
        let searchElemCount = Object.keys(searchElem).length;
        let status=false
        for (let i = 0; i <= arr.length - 1; i++) {
            let count=0;
            for (let [k1, v1] of Object.entries(arr[i])) {
                for (let [k, v] of Object.entries(searchElem)) {
                    if (k === k1 && v === v1) {
                        count += 1;
                    }
                }
            }
            console.log(count)
            status= searchElemCount === count ? true : false;
            if (status === true) return `object for ${arr[i].user}`
        }
       
    }
	if (Array.isArray(arr)) {
		if (typeof searchElem === 'function') {
            const output= arr.filter(searchElem)
            return output.length > 0 ? `object for ${output[0].user}` : undefined;
		} else if (typeof searchElem === 'object' && !Array.isArray(searchElem)) {
           return findObjInArr(arr,searchElem)
		} else if (typeof searchElem === 'object' && Array.isArray(searchElem)) {
            let obj={}
            for (let i=searchElem.length-1; i>=0; i--) {
                if (i%2!==0) {
                    obj={...obj,[searchElem[i-1]]:searchElem[i]}
                }
            }
            return findObjInArr(arr,obj)

            
		}
	}
};

var users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred', age: 40, active: false },
	{ user: 'pebbles', age: 1, active: true },
];

console.log(find(users, { "age": 1, "active": true }));
