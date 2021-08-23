// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const handler = async (event) => {
const handler = function (event, context) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello World` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
