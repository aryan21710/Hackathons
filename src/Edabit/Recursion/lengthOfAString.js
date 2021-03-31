const length = str => {
    if (str == '') {
        return 0
    } else {
        console.log(str.substring(1));
        return length(str.substring(1)) + 1;
    } 
}


console.log(length('kabir'));