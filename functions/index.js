const functions = require('firebase-functions');

let powerMoveList = require('./powerMoves.json');

exports.powerMove = functions.https.onRequest((request, response) => {
  const powerMove = getRandom(powerMoveList)
  response.status(200).send(powerMove)
})

function getRandom(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}