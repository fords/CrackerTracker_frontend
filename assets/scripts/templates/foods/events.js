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

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.passwordFailure)
}

const createFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createFood(data)
    .then(ui.createFoodSuccess)
    .catch(ui.failure)
}

const updateFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateFood(data)
    .then(ui.updateFoodSuccess)
    .catch(ui.failure)
}

const getOneFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getOneFood(data)
    .then(ui.getOneFoodSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('submit', onSignUp),
  $('#sign-in').on('submit', onSignIn),
  $('#sign-out').on('submit', onSignOut),
  $('#change-password').on('submit', onChangePassword),
  $('#create-food').on('submit', createFood),
  $('#update-food').on('submit', updateFood),
  $('#getone-food').on('submit', getOneFood)
}

module.exports = {
  addHandlers
}
