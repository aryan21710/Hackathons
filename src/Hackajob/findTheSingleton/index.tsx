 function run(student_list: number[]) {
	/*
	 * Write your code below; return type and arguments should be according to the problem's requirements
	 */

	let dupArray: number[] = [];
	for (let i = 0; i <= student_list.length - 1; i++) {
		if (!dupArray.includes(student_list[i])) {
			for (let j = i + 1; j <= student_list.length - 1; j++) {
				if (student_list[j] === student_list[i]) {
					dupArray.push(student_list[j]);
					break;
				}
      }
		}
  }

  
  const output=student_list.filter((item)=>!dupArray.includes(item)).pop()
	console.log('output',output);
}

console.log(run([2,2,10,5,4,6,7,5,8,8,6,4,7]));
