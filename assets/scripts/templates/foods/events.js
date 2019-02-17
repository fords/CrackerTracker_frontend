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


const updateFood = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const foodId = $(event.target).closest('section').data('id')
  // debugger
  api.updateFood(data, foodId)
    .then(ui.updateFoodSuccess)
    .catch(ui.failure)
}

const getOneFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getOneFood(data)
    .then(ui.getOneFoodSuccess)
    .catch(ui.getOneFoodFailure)
}
const getAllFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getAllFood(data)
    .then(ui.getAllFoodSuccess)
    .catch(ui.failure)
}

const deleteOneFood = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  const foodId = $(event.target).closest('section').data('id')
  debugger
  api.deleteOneFood(foodId)
    .then(ui.deleteOneFoodSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('submit', onSignUp),
  $('#sign-in').on('submit', onSignIn),
  $('#sign-out').on('submit', onSignOut),
  $('#change-password').on('submit', onChangePassword),
  $('#create-food').on('submit', createFood),
  $('.food-handlebars').on('submit',updateFood),
  $('.food-handlebars').on('click', '.delete-food-btn', deleteOneFood)
  $('#getone-food').on('submit', getOneFood),
  $('#getall-food').on('submit',getAllFood),
  $('#deleteone-food').on('submit', deleteOneFood)
}

module.exports = {
  addHandlers
}
