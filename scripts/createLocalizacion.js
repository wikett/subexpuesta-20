'use strict'

const fs = require('fs')

const localizacion = {
  id: '111',
  titulo: 'Rio Lava',
  autor: 'Victor Quinto',
  cloudinaryId: 'subexpuesta/c9wb3uxhhbiejbpds8ja',
  acceso:
    'Esta realizada en el tobogán del parque Adolfo Suarez por lo que el acceso es para todos los públicos y no tiene ninguna dificultad.',
  peligrosidad: 1,
  contaminacionLuminica: 6,
  latitud: 38.40353731566137,
  longitud: -0.5341941118240358,
  altitud: '',
  loc: {
    coordinates: [-0.5341941118240358, 38.40353731566137],
    type: 'Point',
  },
  direccion: '-',
  pais: 'ESP',
  provincia: 'Alicante',
  ciudad: 'San Vicente del Raspeig',
  codigoPostal: '03690',
  estado: 0,
  tags: [],
  votos: 0,
  fechaToma: '2019-04-14T10:33:00.353Z',
  fechaSubida: '2019-04-14T10:33:00.353Z',
  createdAt: '2019-04-14T10:33:00.355Z',
  updatedAt: '2020-08-31T19:03:45.310Z',
  categoria: 2,
  exif: {
    marca: 'Canon',
    modelo: 'Canon EOS 700D',
    objetivo: '11-16mm',
    apertura: '8.0',
    velocidad: '0',
    iso: '100',
    balanceBlancos: '',
    fechaToma: '2019-03-04T23:00:00Z',
  },
  visitas: 32,
  guardado: 0,
  marca: '',
  modelo: '',
  filtros: [],
}

fs.writeFile(
  'content/localizaciones/' + localizacion.id + '.json',
  JSON.stringify(localizacion),
  (err) => {
    if (err) throw err
    console.log('Localizacion creada')
  }
)
const filename = 'assets/data/localizaciones.json'
fs.readFile(filename, function (err, data) {
  if (err) throw err
  let theFile = data.toString()

  theFile = theFile.slice(0, theFile.length - 1)

  theFile = theFile.concat(',', JSON.stringify(localizacion), ']')

  fs.writeFile(filename, theFile, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(`Fichero editado`)
  })
})
