'use strict'

const fs = require('fs')
const localizaciones = require('../assets/data/localizaciones.json')
const usuarios = require('../assets/data/usuarios.json')
const fijos = [
  {
    from: '/mapa-localizaciones',
    to: '/mapa-localizaciones/',
  },
  {
    from: '/localizaciones-fotografia-nocturna',
    to: '/mapa-localizaciones/',
  },
  { from: '/blog', to: '/blog/' },
]

fs.writeFile('./static/_redirects', '', function (err) {
  if (err) throw err
  fijos.forEach((item) => {
    const staticRedirec = `${item.from}\t${item.to}\n`
    fs.appendFile('./static/_redirects', staticRedirec, function (err) {
      if (err) throw err
      else {
        console.log(`Usuario ${item.to} añadido correctamente`)
      }
    })
  })
  usuarios.forEach((usuario) => {
    if (
      localizaciones.find((item) => {
        return item.autor === usuario.username
      })
    ) {
      // console.log(`Usuario: ${usuario.username} tiene localizaciones`)
      const redirection = `/${usuario.username}\t/usuario/${usuario.username}/\n`
      fs.appendFile('./static/_redirects', redirection, function (err) {
        if (err) throw err
        else {
          console.log(`Usuario ${usuario.username} añadido correctamente`)
        }
      })
    }
  })
})
