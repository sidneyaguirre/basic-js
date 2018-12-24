//functions as values

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2); // multiplier is called and creates an environment in which its factor parameter is bound to 2.
console.log(twice(5));
//The function value it returns, which is stored in twice,remembers this environment. 
//So when that is called, it multiplies its argument by 2.


function plusAntecessor(plus) {
    return number => number + (plus - 1)
}

let value = plusAntecessor(2) //adds the antecessor of the number passed as parameter
console.log(value(3))
    //therefore, the result is the value (3) plus the antecessor of a number (2).