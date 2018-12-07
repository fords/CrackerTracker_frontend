const store = require('../../store')

// const onClick = function (obj) {
//    alert('Button clicked, id ' + obj + ', text' + obj.innerHTML)
//    console.log(obj)
// }
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
  // console.log(' sign up success')
}

const signOutSuccess = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed out successfully!!')
  // $('.signInUp').css('display', 'block')
  store.user = null
}

const failure = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Error!!!')
  // console.log(' sign up success')
}

const createFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('create food  successfully!!')
  $('#sign-up')[0].reset()
  // console.log(' sign up success')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  createFoodSuccess,
  failure
}
