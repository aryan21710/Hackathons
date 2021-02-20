function vowelsAndConsonants(s) {
    const vowels='aeiou';
    let _='';
    let consonants='';
    for (let i=0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            _=_.concat(s[i])
        } else {
            consonants=consonants.concat(s[i])
        }
    }
    for (let i=0; i < _.length; i++) {
        console.log(_[i])
    }

      for (let i=0; i < consonants.length; i++) {
        console.log(consonants[i])
    }
}


console.log(vowelsAndConsonants('javascriptloops'));