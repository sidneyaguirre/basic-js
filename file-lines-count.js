//toma un archivo y cuenta el número de líneas de manera síncrona
var fs = require('fs')  
let buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
let lin = str.split("\n").length
console.log((lin-1))

var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)


//toma un archivo y cuenta el número de líneas de manera asíncrona

var fs = require('fs')
var file = process.argv[2]
var lines = undefined

function linesc(callback){
    fs.readFile(file, function doneReading(err, fileContents){
        lines = fileContents.toString().split('\n').length -1 
        callback()
    })
}

function logLines(){
    console.log(lines)
}

linesc(logLines)

/*var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/


