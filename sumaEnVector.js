let v = [2, 3, 9, 1, 2, 3];
let number = 13;

let aux = 0; 
let i = 0;

while (i < v.length) {
    aux += v[i];
    if((aux + v[i+1]) === number) {
        return console.log(true);
    }else {
        if((aux + v[i+1]) > number){
            aux = v[i];
        }
        i++;
    };
};
