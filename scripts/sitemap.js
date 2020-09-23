'use strict'

const fs = require('fs')
const xmlParser = require('xml2json')
const listado = require('../assets/data/localizaciones.json')

function eliminaracento(letra) {
  switch (letra) {
    case 'á':
      return 'a'
    case 'é':
      return 'e'
    case 'í':
      return 'i'
    case 'ó':
      return 'o'
    case 'ú':
      return 'u'
    case 'ñ':
      return 'n'
    default:
      return letra
  }
}
function eliminarcaracteres(text) {
  let newtext = ''
  for (const i in text) {
    newtext += eliminaracento(text[i])
  }
  return newtext
}
function convertSEO(text) {
  if (text)
    return (
      eliminarcaracteres(text)
        .replace(/[-\s]+/g, '-') // convert spaces to hyphens
        .replace(/[^-\w\s]/g, '') // remove unneeded chars
        .replace(/^\s+|\s+$/g, '') + ''
    ).toLowerCase() // trim leading/trailing spaces
}

function formatDate(fechaToma) {
  const d = new Date(fechaToma)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${ye}-${mo}-${da}`
}

fs.writeFile(
  './static/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  function (err) {
    if (err) throw err
    listado.forEach((item) => {
      const newUrl =
        'https://www.subexpuesta.com/localizaciones/' +
        item.id +
        '/' +
        convertSEO(item.titulo)
      const xml = `<url><loc>${newUrl}</loc><lastmod>${formatDate(
        item.fechaToma
      )}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
      fs.appendFile('./static/sitemap.xml', xml, function (err) {
        if (err) {
          // append failed
        } else {
          console.log(item.titulo + ' completado')
        }
      })
    })
    fs.appendFile('./static/sitemap.xml', '</urlset>', function (err) {
      if (err) {
        // append failed
      } else {
        // done
        console.log(`TODO completado`)
      }
    })
  }
)
