'use strict'

const fs = require('fs')
const readline = require('readline')
const userList = []

const readInterface = readline.createInterface({
  input: fs.createReadStream('users.json'),
  output: false,
  console: false,
})
readInterface.on('line', function (line) {
  const user = JSON.parse(line)
  const newUser = {
    username: user.username,
    from: user.deDondeEres,
    createdAt: user.createdAt,
    description: user.descripcion,
    web: user.web,
    urlFacebook: user.urlFacebook,
    urlTwitter: user.urlTwitter,
    urlInstagram: user.urlInstagram,
    url500px: user.url500px,
  }

  userList.push(newUser)
})

readInterface.on('close', () => {
  console.log('Done reading file')
  console.log(userList)
  fs.writeFile('usuarios.json', JSON.stringify(userList), 'utf8', function (
    err
  ) {
    if (err) return console.log(err)
    console.log('EXITO')
  })
})
