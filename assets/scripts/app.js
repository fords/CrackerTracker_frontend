'use strict'
const events = require('./templates/foods/events.js')
// const store = require('./store.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  events.addHandlers()
})
