const functions = require('firebase-functions');

let powerMoveList = require('./powerMoves.json');

exports.powerMove = functions.https.onRequest((request, response) => {
  let powerMove = ""
  if (request.body.id) {
    powerMove = fetchIndex(request.body.id)
  } else {
    powerMove = getRandom()
  }
  response.status(200).send(powerMove)
})

exports.powerMoveP = functions.https.onRequest((request, response) => {
  // create Powermove ahead of time
  let powerMove = ""
  if (request.body.id) {
    powerMove = fetchIndex(request.body.id)
  } else {
    powerMove = getRandom()
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
  start = 'powermove=('
  end = ');'
  return start + JSON.stringify(powerMove) + end
}