'use strict'

const fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
  input: fs.createReadStream('localizaciones.json'),
  output: false,
  console: false,
})
readInterface.on('line', function (line) {
  // console.log(line)
  const localizacion = JSON.parse(line)

  fs.writeFile(
    'content/localizaciones/' + localizacion._id.$oid + '.json',
    line,
    function (err) {
      if (err) return console.log(err)
      console.log(localizacion._id.$oid)
    }
  )
})

// const rawdata = fs.readFileSync('localizaciones.json')

// const localizacion = JSON.parse(rawdata)
// console.log(localizacion)
