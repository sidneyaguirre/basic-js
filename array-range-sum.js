//function that takes three arguments, start end, and jump, 
//returns an array containing all the numbers from start up to (and including) end
//Step indicates the increment for the array items

// var initial = 1
// var final = 5
// var jump = 2

//Recibe valores por consola:
let initial = Number(process.argv[2])
let final = Number(process.argv[3])
let jump = Number(process.argv[4])
let result = range(initial, final, jump)

//Imprime resultados:
console.log("~> Arreglo: [" + result + "]")
console.log("~> La suma de los valores en el arreglo es: " + sum(result))

function range(start, end, step) {
    let array = []
    let i
    if ((step < 0)) {
        if (start < end) {
            let aux = start
            start = end
            end = aux
            i = start //takes the value of the second argument. it had to change
            while (i >= end) {
                array.push(i)
                i += step
            }
        } else if (start > end) {
            i = start //takes the value of the second argument. it had to change
            while (i >= end) {
                array.push(i)
                i += step
            }
        }
    } else if (step == 0) {
        console.log("Error! el incremento debe ser un entero diferente de cero")
        return
    } else if ((isNaN(step)) || (step >= 1)) {
        if (isNaN(step)) { step = 1 }
        if (start > end) {
            let aux = start
            start = end
            end = aux
        }
        i = start //takes the value of the first argument 
        while (i <= end) {
            array.push(i)
            i += step
        }
    } else {

    }
    return array
}

function sum(array) {
    if (array == null) {
        console.log("El arreglo no tiene elementos para sumar.")
        return null
    } else {
        let increment = 0
        for (let i = 0; i <= array.length - 1; i++) {
            increment += array[i]
        }
        return increment
    }
}