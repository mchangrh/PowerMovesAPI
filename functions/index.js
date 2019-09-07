const functions = require('firebase-functions');

let powerMoveList = require('./powerMoves.json');

exports.powerMove = functions.https.onRequest((request, response) => {
  if (request.body.id) {
    const powerMove = fetchIndex(request.body.id)
  } else {
    const powerMove = getRandom()
  }
  response.status(200).send(powerMove)
})

exports.powerMoveP = functions.https.onRequest((request, response) => {
  if (request.body.id) {
    const powerMove = fetchIndex(request.body.id)
  } else {
    const powerMove = getRandom()
  }
  // craft response for JSONP
  jsonpResponse = jsonpConvert(powerMove)
  response.status(200).send(jsonpResponse)
})

function getRandom() {
  let index = Math.floor(Math.random() * powerMoveList.length);1
  return fetchIndex(index)
}

function fetchIndex(index) {
 return powerMoveList[index] 
}

function jsonpConvert(powerMove) {
  start = 'powermoves=('
  end = ');'
  return start + JSON.stringify(powerMove) + end
}