export default (context, inject) => {
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

  const convertSEO = (text) => {
    if (text)
      return (
        eliminarcaracteres(text)
          .replace(/[-\s]+/g, '-') // convert spaces to hyphens
          .replace(/[^-\w\s]/g, '') // remove unneeded chars
          .replace(/^\s+|\s+$/g, '') + ''
      ).toLowerCase() // trim leading/trailing spaces
  }
  inject('convertSEO', convertSEO)
  context.$convertSEO = convertSEO
}
