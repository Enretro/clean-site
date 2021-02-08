exports.handler = function(event, contex, callback) {
  callback(null, {
    statusCode: 200,
    body: "Welcom to the super secret area"
  })
}