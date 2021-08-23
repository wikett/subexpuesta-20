export default (context, inject) => {
  const getPais = (pais) => {
    const paises = [
      'Albania',
      'Argelia',
      'Samoa Americana',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antártida',
      'Antigua y Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaiyán',
      'Bahamas',
      'Bahrein',
      'Bangladesh',
      'Barbados',
      'Bielorrusia',
      'Bélgica',
      'Belice',
      'Benín',
      'Bermudas',
      'Bután',
      'Bolivia',
      'Bosnia-Herzegovina',
      'Botswana',
      'Brasil',
      'Brunei Darussalam',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Camboya',
      'Camerún',
      'Canadá',
      'Cabo Verde',
      'Islas Caimán',
      'República Centroafricana',
      'Chad',
      'Chile',
      'China',
      'Isla De Navidad, Isla Christmas',
      'Islas Cocos',
      'Colombia',
      'Comores',
      'República Democrática del Congo',
      'República del Congo',
      'Islas Cook',
      'Costa Rica',
      'Costa de Marfil',
      'Croacia',
      'Cuba',
      'Chipre',
      'Chequia',
      'Dinamarca',
      'Djibouti, Yibuti',
      'Dominica',
      'República Dominicana',
      'Timor Oriental',
      'Ecuador',
      'Egipto',
      'El Salvador',
      'Guinea Ecuatorial',
      'Eritrea',
      'España',
      'Estonia',
      'Etiopía',
      'Islas Malvinas',
      'Islas Feroe',
      'Fiyi',
      'Finlandia',
      'Francia',
      'Guayana Francesa',
      'Polinesia Francesa',
      'Gabón',
      'Gambia',
      'Georgia',
      'Alemania',
      'Ghana',
      'Gibraltar',
      'Gran Bretaña',
      'Grecia',
      'Groenlandia',
      'Granada',
      'Guadalupe',
      'Guam',
      'Guatemala',
      'República Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Cdad. del Vaticano',
      'Honduras',
      'Hong Kong',
      'Hungría',
      'Islandia',
      'India',
      'Indonesia',
      'Irán',
      'Iraq',
      'Irlanda',
      'Israel',
      'Italia',
      'Jamaica',
      'Japón',
      'Jordania',
      'Kazajistán',
      'Kenia',
      'Kiribati',
      'Corea del Norte',
      'Corea del Sur',
      'Kosovo',
      'Kuwait',
      'Kirguistán',
      'Laos',
      'Letonia',
      'Líbano',
      'Lesotho',
      'Liberia',
      'Libia',
      'Liechtenstein',
      'Lituania',
      'Luxemburgo',
      'Macao',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malasia',
      'Maldivas',
      'Malí',
      'Malta',
      'Islas Marshall',
      'Martinica',
      'Mauritania',
      'Mauricio',
      'Mayotte',
      'México',
      'Estados Federados de Micronesia',
      'Moldavia',
      'Mónaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Marruecos',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Países Bajos',
      'Antillas Holandesas',
      'Nueva Caledonia',
      'Nueva Zelanda',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Niue',
      'Marianas del Norte',
      'Noruega',
      'Omán',
      'Pakistán',
      'Palau',
      'Territorios Palestinos',
      'Panamá',
      'Papúa-Nueva Guinea',
      'Paraguay',
      'Perú',
      'Filipinas',
      'Isla Pitcairn',
      'Polonia',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunión',
      'Rumanía',
      'Federación Rusa',
      'Ruanda',
      'San Cristobal y Nevis',
      'Santa Lucía',
      'San Vincente y Granadinas',
      'Samoa',
      'San Marino',
      'Santo Tomé y Príncipe',
      'Arabia Saudita',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leona',
      'Singapur',
      'Eslovaquia',
      'Eslovenia',
      'Islas Salomón',
      'Somalia',
      'Sudáfrica',
      'Sudán del Sur',
      'España',
      'Sri Lanka',
      'Sudán',
      'Surinam',
      'Swazilandia',
      'Suecia',
      'Suiza',
      'Siria',
      'Taiwan',
      'Tadjikistan',
      'Tanzania',
      'Tailandia',
      'Tíbet',
      'Timor Oriental',
      'Togo',
      'Tokelau',
      'Tonga',
      'Trinidad y Tobago',
      'Túnez',
      'Turquía',
      'Turkmenistan',
      'Islas Turcas y Caicos',
      'Tuvalu',
      'Uganda',
      'Ucrania',
      'Emiratos Árabes Unidos',
      'Reino Unido',
      'EE. UU.',
      'Uruguay',
      'Uzbekistán',
      'Vanuatu',
      'Ciudad del Vaticano',
      'Venezuela',
      'Vietnam',
      'Islas Virgenes Británicas',
      'Islas Virgenes Americanas',
      'Wallis y Futuna',
      'Sáhara Occidental',
      'Yemen',
      'Zambia',
      'Zimbabwe',
    ]

    let paisDireccion = ''
    // _.some(paises, function (item) {
    //   if (pais.includes(item)) {
    //     paisDireccion = item
    //     return true
    //   }
    // })
    paises.forEach((item) => {
      if (pais.includes(item)) {
        paisDireccion = item
        return true
      }
    })
    return paisDireccion
  }

  const getProvincia = (direccion) => {
    const provincias = [
      'Álava',
      'Araba',
      'Albacete',
      'Alicante',
      'Almería',
      'Asturias',
      'Ávila',
      'Badajoz',
      'Barcelona',
      'Bizkaia',
      'Burgos',
      'Cáceres',
      'Cádiz',
      'Cantabria',
      'Castellón',
      'Castelló',
      'Ceuta',
      'Ciudad Real',
      'Córdoba',
      'La Coruña',
      'A Coruña',
      'Cuenca',
      'Gerona',
      'Granada',
      'Guadalajara',
      'Guipúzcoa',
      'Gipuzkoa',
      'Huelva',
      'Huesca',
      'Islas Baleares',
      'Illes Balears',
      'Jaén',
      'León',
      'Lérida',
      'Lugo',
      'Madrid',
      'Málaga',
      'Melilla',
      'Murcia',
      'Navarra',
      'Ourense',
      'Palencia',
      'Las Palmas',
      'Pontevedra',
      'La Rioja',
      'Salamanca',
      'Segovia',
      'Sevilla',
      'Soria',
      'Tarragona',
      'Santa Cruz de Tenerife',
      'Teruel',
      'Toledo',
      'Valencia',
      'Valladolid',
      'Vizcaya',
      'Zamora',
      'Zaragoza',
    ]

    let provinciaDireccion = ''
    provincias.forEach((provincia) => {
      if (direccion.includes(provincia)) {
        if (provincia === 'Bizcaia') {
          provincia = 'Vizcaya'
        }
        if (provincia === 'Illes Balears') {
          provincia = 'Islas Baleares'
        }
        if (provincia === 'Castelló') {
          provincia = 'Castellón'
        }
        if (provincia === 'Araba') {
          provincia = 'Álava'
        }
        if (provincia === 'Gipuzkoa') {
          provincia = 'Guipúzcoa'
        }
        if (provincia === 'A Coruña') {
          provincia = 'La Coruña'
        }

        provinciaDireccion = provincia
      }
    })
    // _.each(provincias, function (item) {
    //   if (direccion.includes(item)) {
    //     if (item === 'Bizcaia') {
    //       item = 'Vizcaya'
    //     }
    //     provinciaDireccion = item
    //   }
    // })
    return provinciaDireccion
  }

  // Get Comunidad
  const getComunidad = (direccion) => {
    const comunidades = [
      'Andalucía',
      'Aragón',
      'Canarias',
      'Cantabria',
      'Castilla y León',
      'Castilla La Mancha',
      'Cataluña',
      'Ceuta',
      'Comunidad Valenciana',
      'Madrid',
      'Extremadura',
      'Galicia',
      'Islas Baleares',
      'La Rioja',
      'Melilla',
      'Navarra',
      'País Vasco',
      'Asturias',
      'Murcia',
    ]

    const andalucia = [
      'Almería',
      'Cádiz',
      'Córdoba',
      'Granada',
      'Huelva',
      'Jaén',
      'Málaga',
      'Sevilla',
    ]
    const aragon = ['Huesca', 'Teruel', 'Zaragoza']
    const canarias = ['Santa Cruz de Tenerife', 'Las Palmas']
    const cantabria = ['Cantabria']
    const castillaYLeon = [
      'Ávila',
      'Burgos',
      'León',
      'Salamanca',
      'Segovia',
      'Soria',
      'Valladolid',
      'Zamora',
    ]
    const castillaYLaMancha = [
      'Albacete',
      'Ciudad Real',
      'Cdad. Real',
      'Cuenca',
      'Guadalajara',
      'Toledo',
    ]
    const catalunya = [
      'Barcelona',
      'Gerona',
      'Girona',
      'Lérida',
      'Lleida',
      'Tarragona',
    ]
    const ceuta = ['Ceuta']
    const comunidadValenciana = [
      'Alicante',
      'Valencia',
      'Castellón',
      'Castelló',
    ]
    const madrid = ['Madrid']
    const extremadura = ['Badajoz', 'Cáceres']
    const galicia = ['La Coruña', 'A Coruña', 'Lugo', 'Ourense', 'Pontevedra']
    const islasBaleares = ['Islas Baleares', 'Illes Balears']
    const laRioja = ['La Rioja']
    const melilla = ['Melilla']
    const navarra = ['Navarra']
    const paisVasco = [
      'Bizkaia',
      'Vizcaya',
      'Guipúzcoa',
      'Gipuzkoa',
      'Álava',
      'Araba',
    ]
    const asturias = ['Asturias']
    const murcia = ['Murcia']
    const todasComunidades = [
      andalucia,
      aragon,
      canarias,
      cantabria,
      castillaYLeon,
      castillaYLaMancha,
      catalunya,
      ceuta,
      comunidadValenciana,
      madrid,
      extremadura,
      galicia,
      islasBaleares,
      laRioja,
      melilla,
      navarra,
      paisVasco,
      asturias,
      murcia,
    ]

    let comunidadaDireccion = ''
    todasComunidades.forEach((comunidad, index) => {
      comunidad.forEach((provincias) => {
        if (direccion.includes(provincias)) {
          comunidadaDireccion = comunidades[index]
        }
      })
    })
    // _.each(todasComunidades, function (comunidad, index) {
    //   _.each(comunidad, function (provincias) {
    //     if (direccion.includes(provincias)) {
    //       comunidadaDireccion = comunidades[index]
    //     }
    //   })
    // })
    return comunidadaDireccion
  }

  inject('getPais', getPais)
  context.$getPais = getPais

  inject('getProvincia', getProvincia)
  context.$getProvincia = getProvincia

  inject('getComunidad', getComunidad)
  context.$getComunidad = getComunidad
}
