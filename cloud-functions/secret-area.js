exports.handler = function(event, contex, callback) {
  const secretContent = `
  <h3>Welcome To Secret Area</h3>
  <p>We can tell you that the sky is <srtong>blue</strong>, and en plus en is equals tree.</p>
  `
  
  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}  	
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })

  } else {
    callback(null, {
      statusCode: 401
    })
  } 

  
}