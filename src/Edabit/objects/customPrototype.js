Array.prototype.mylength=function() {
    let count;
    for (let i=0; i<this.length;i++) {
        count+=1;
    }
    return `length of array ${this} is count`
}

console.log([11,22,33].mylength())





