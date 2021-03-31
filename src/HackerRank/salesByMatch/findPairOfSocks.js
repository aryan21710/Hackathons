const findPairs = (n,ar) => {
	const pairs = {};
	ar.forEach(_ => {
        const k=String(_)
        let count = 1;
		if (Object.keys(pairs).includes(k)) {
			pairs[_] = pairs[_]+1;
		} else if (!Object.keys(pairs).includes(_)) {
			pairs[k] = count;
		}
    });


    let noOfPairs=[]

    for (let i in pairs) {
        if (pairs[i] > 1 && pairs[i]/2>=0) {
            noOfPairs=[...noOfPairs,Math.floor(pairs[i]/2)]
        }
    }
    return noOfPairs.reduce((init,acc)=>{
        return init+acc
    },0)
};


findPairs(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])
