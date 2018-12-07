const store = require('../../store')


const signUpSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed up successfully!!')
  $('#sign-up')[0].reset()
  // console.log(' sign up success')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed in successfully!!')
  $('#sign-in')[0].reset()
}

const signOutSuccess = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed out successfully!!')
  // $('.signInUp').css('display', 'block')
  store.user = null
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully!!')
  $('#change-password')[0].reset()
}

const failure = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Error!!!')
}

const createFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('create food  successfully!!')
  $('#sign-up')[0].reset()
  // console.log(' sign up success')
}

const updateFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('updated food  successfully!!')
  $('#sign-up')[0].reset()
}

const getOneFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('get one food  successfully!!')
  const foodHTML = (`
        <h4> ${data.food.name} </h4>
        <p> ${data.food.breakfast} </p>
        <p> ${data.food.lunch} </p>
      `)
  $('#feedbackOnAction').append(foodHTML)
  $('#sign-up')[0].reset()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  createFoodSuccess,
  changePasswordSuccess,
  updateFoodSuccess,
  getOneFoodSuccess,
  failure
}
