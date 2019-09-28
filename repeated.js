let string = "holaa"

for(let i = 0; i < string.length; i++) {
    let aux = string[i]
    
    if(aux !== string[i+1]){
        if (i === (string.length)-1) {
            return console.log(false)
        } else {
            continue;
        }
    } else {
        console.log(string[i], string[i+1])
        return console.log(true);
    }
}

