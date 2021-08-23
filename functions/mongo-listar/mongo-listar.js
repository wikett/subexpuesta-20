const MongoClient = require('mongodb').MongoClient
const localizaciones = require('../../assets/data/localizaciones.json')

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'production'

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
  const locas = await db.collection('localizaciones').find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(locas),
  }
}

const pushToDatabase = async (db, data) => {
  try {
    await db.collection('localizaciones').insertMany([data])
    return { statusCode: 201 }
  } catch (error) {
    return { statusCode: 500 }
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
