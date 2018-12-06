const getFormFields = require('../../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../../store.js')
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const createFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createFood(data)
    .then(ui.createFoodSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('submit', onSignUp),
$('#create-food').on('submit',createFood)
}

module.exports = {
  addHandlers
}
