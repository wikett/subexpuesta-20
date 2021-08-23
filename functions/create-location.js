'use strict'

const fs = require('fs')

exports.handler = async function (event, context) {
  // your server-side functionality
  const localizacion = JSON.parse(event.body)

  fs.writeFile(
    'content/localizaciones/' + localizacion.id + '.json',
    JSON.stringify(localizacion),
    (err) => {
      if (err) throw err
      console.log('Localizacion creada')
    }
  )
  const filename = 'assets/data/localizaciones.json'
  await fs.readFile(filename, function (err, data) {
    if (err) throw err
    let theFile = data.toString()

    theFile = theFile.slice(0, theFile.length - 1)

    theFile = theFile.concat(',', JSON.stringify(localizacion), ']')

    fs.writeFile(filename, theFile, function (err) {
      if (err) {
        throw err
      }
      console.log(`Fichero editado`)
    })
  })
  return {
    statusCode: 201,
    body: JSON.stringify({ message: 'Localizacion creada' }),
  }
}
