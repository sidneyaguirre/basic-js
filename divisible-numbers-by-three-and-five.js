//Program to print "FizzBuzz" for numbers that are divisible by both 3 and 5, 
//and still print "Fizz" or "Buzz"for numbers divisible by only one of those.

let three = "Fizz";
let five = "Buzz";
let both = three + five;
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(both);
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
        if (i % 3 === 0) { console.log(three); } else { console.log(five); }
    } else { console.log(i); }
}

//OR

let three = "Fizz";
let five = "Buzz";
let both = three + five;
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(both);
    } else {
        if ((i % 3 === 0) && (i % 5 !== 0)) {
            console.log(three);
        } else if ((i % 5 === 0) && (i % 3 !== 0)) {
            console.log(five);
        } else { console.log(i); }
    }
}