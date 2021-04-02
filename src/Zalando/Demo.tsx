export function Solution(A: number[]) {
	const lowest = Math.min(...A);
	const highest = Math.max(...A);
	let output = [];
	if (highest >= 0 && lowest >= 0) {
		for (let i = lowest; i <= highest; i++) {
			if (!A.includes(i + 1) && i + 1 !== 0) {
				output.push(i + 1);
			}
		}
		return output.length > 0 ? Math.min(...output) : [...output, highest + 1].pop();
	} else {
		return 1;
	}
}

// console.log(Solution([-1000000,1000000]));
console.log(Solution([0]));

