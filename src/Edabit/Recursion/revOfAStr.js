function reverse(str) {
    if (str.length === 0) {
        return ''
    } else {
        const lastElm=str[str.length-1];
        const newStr=str.substr(0, str.length-1);
        return lastElm + reverse(newStr)
    }
}


console.log(reverse(''))