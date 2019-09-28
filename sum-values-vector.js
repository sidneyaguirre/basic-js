// container array
let v = [2, 3, 9, 1, 2, 3];

// number you are looking for:
let number = 10;

// auxiliars vars and counters
let aux = 0;
let values = "";
let i = 0;

while (i < v.length) {
  aux += v[i];
  values += ' + ' + String(v[i]);
  if (aux === number) {
    console.log('number you are looking for:', number);
    console.log(values);
    return console.log(true);
  } else if (aux + v[i + 1] > number) {
    aux = v[i];
    values = String(v[i]);
  }
  i++;
  if (i === v.length) {
    return console.log(false);
  }
}
