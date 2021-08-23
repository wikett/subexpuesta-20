const MongoClient = require('mongodb').MongoClient

const MONGODB_URI = process.env.MONGODB_URI // TODO: actualizar la base de datos en la url de netlify
const DB_NAME = 'sample_restaurants'

let cachedDb = null

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  })

  cachedDb = client.db(DB_NAME)

  return cachedDb
}

const queryDatabase = async (db) => {
  const restaurants = await db.collection('restaurants').find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurants),
  }
}

const pushToDatabase = async (db, data) => {
  const pokemonData = {
    name: data.name,
    number: data.number,
  }

  if (pokemonData.name && pokemonData.number) {
    await db.collection('pokemon').insertMany([data])
    return { statusCode: 201 }
  } else {
    return { statusCode: 422 }
  }
}

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connectToDatabase(MONGODB_URI)
  switch (event.httpMethod) {
    case 'GET':
      return queryDatabase(db)
    case 'POST':
      return pushToDatabase(db, JSON.parse(event.body))
    default:
      return { statusCode: 400 }
  }
}
