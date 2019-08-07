const functions = require('firebase-functions');

let powerMoveList = require('./powerMoves.json');

exports.powerMove = functions.https.onRequest((request, response) => {
  const powerMove = getRandom(powerMoveList)
  response.status(200).send(powerMove)
})

exports.powerMoveP = functions.https.onRequest((request, response) => {
  const powerMove = getRandom(powerMoveList)
  // craft response for JSONP
  start = 'powerMoves=('
  end = ');'
  finalResponse = start + JSON.stringify(powerMove) + end
  response.status(200).send(finalResponse)
})

function getRandom(array) {
  let index = Math.floor(Math.random() * array.length);1
  return array[index];
}