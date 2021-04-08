function getSecondLargest(nums) {
    // Complete the function
    const maxIndex=nums.indexOf(Math.max(...nums));
    const output=nums.splice(maxIndex,1)
    console.log(maxIndex,':',nums);
    return Math.max(...nums)
}



console.log(getSecondLargest([2,3,6,6,5]));