export default (context, inject) => {
  const getCategory = (category) => {
    const categoriaObject = {}
    switch (category) {
      case 0: // Nocturna Paisaje
        categoriaObject.icon =
          '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'
        categoriaObject.titulo = 'Paisaje Nocturno'
        categoriaObject.color = '#0533ef'
        return categoriaObject
      case 1: // Nocturna Urbana
        categoriaObject.icon = 'zmdi zmdi-city'
        categoriaObject.titulo = 'Nocturna Urbana'
        categoriaObject.color = '#0533ef'
        categoriaObject.colorTexto = 'pink darken-4'
        return categoriaObject
      case 2: // Nocturna Lightpainting
        categoriaObject.icon = 'zmdi zmdi-flash'
        categoriaObject.titulo = 'Lightpainting'
        categoriaObject.color = '#0533ef'
        categoriaObject.colorTexto = 'yellow darken-2'
        return categoriaObject
      case 3: // Nocturna Monumentos
        categoriaObject.icon =
          '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>'
        categoriaObject.titulo = 'Nocturna Monumentos'
        categoriaObject.color = '#0533ef'
        return categoriaObject
      case 4: // Nocturna Ruinas
        categoriaObject.icon = 'zmdi zmdi-puzzle-piece'
        categoriaObject.titulo = 'Nocturna Ruinas'
        categoriaObject.color = '#0533ef'
        categoriaObject.colorTexto = 'blue-grey darken-3'
        return categoriaObject
      case 5: // Nocturna Vehículo-Maquinaria
        categoriaObject.icon = 'zmdi zmdi-car'
        categoriaObject.titulo = 'Nocturna Vehículo-Maquinaria'
        categoriaObject.color = '#0533ef'
        categoriaObject.colorTexto = 'deep-orange accent-4'
        return categoriaObject
      case 6: // Nocturna Minería
        categoriaObject.icon = 'zmdi zmdi-layers'
        categoriaObject.titulo = 'Nocturna Minería'
        categoriaObject.color = '#0533ef'
        categoriaObject.colorTexto = 'grey darken-3'
        return categoriaObject
      case 7: // Atardecer-Amanecer
        categoriaObject.icon = 'zmdi zmdi-sun'
        categoriaObject.titulo = 'Atardecer-Amanecer'
        categoriaObject.color = '#E65100'
        categoriaObject.colorTexto = 'blue darken-3'
        return categoriaObject
      case 8: // Larga Exposición Diurna
        categoriaObject.icon = 'zmdi zmdi-square-o'
        categoriaObject.titulo = 'Larga Exposición Diurna'
        categoriaObject.color = '#263238'
        categoriaObject.colorTexto = 'blue darken-3'
        return categoriaObject
      case 9: // Drone
        categoriaObject.icon = 'zmdi zmdi-filter-center-focus'
        categoriaObject.titulo = 'Dron'
        categoriaObject.color = '#73859f'
        return categoriaObject
    }
  }

  inject('getCategory', getCategory)
  context.$getCategory = getCategory
}
