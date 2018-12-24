//count a letter in a string. 
//ex.: cuantity of k in kakkerlake will return 4


var countsLetter = (word, letter) => {
    let q = 0
    for (i = 0; i < word.length; i++) {
        if (word[i] == letter) { q++ }
    }
    return q
};

//this can't be up (?)
let text = "kakkerlake"
let character = "e"
console.log(countsLetter(text, character))