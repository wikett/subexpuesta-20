'use strict'

const fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
  input: fs.createReadStream('users.json'),
  output: false,
  console: false,
})
let contador = 1
readInterface.on('line', function (line) {
  // console.log(line)
  const user = JSON.parse(line)
  console.log(contador + ' -> ' + JSON.stringify(user))
  contador++
  //   fs.writeFile(
  //     'content/users/' + localizacion._id.$oid + '.json',
  //     line,
  //     function (err) {
  //       if (err) return console.log(err)
  //       console.log(localizacion._id.$oid)
  //     }
  //   )
})
