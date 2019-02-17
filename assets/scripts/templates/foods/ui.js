const store = require('../../store')
const showFoodsTemplate = require('../food-listing.handlebars')
const signUpSuccess = function (data) {
  $('#up-message').show().text('Sign Up Success')
  $('#up-message').removeClass()
  $('#up-message').addClass('success')
  $('#up-message').fadeOut(5000)
  // console.log(' sign up success')
}


const signInSuccess = function (data) {
  store.user = data.user
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed in successfully!!')
  $('#sign-in')[0].reset()
  $('.deleteonefood').css('display', 'block')
  $('.createFood').css('display', 'block')
  $('.updateFood').css('display', 'block')
  $('#change-password').css('display', 'block')
  $('.getonefood').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('.signInUp').css('display', 'none')
  $('#nav-new-food').css('display', 'block')
}

const signOutSuccess = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed out successfully!!')
  // $('.signInUp').css('display', 'block')
  store.user = null
  $('.signInUp').css('display', 'block')
  $('.deleteonefood').css('display', 'none')
  $('.createFood').css('display', 'none')
  $('.updateFood').css('display', 'none')
  $('#change-password').css('display', 'none')
  $('.getonefood').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnOneRow').html(' ')
  $('#nav-new-food').css('display', 'none')
}

const changePasswordSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').show().text('Password changed successfully!!')
  $('#feedbackOnAction').fadeOut(5000)
  $('#out-message').show().text('Your Password Has Been Changed!')
  $('#out-message').removeClass()
  $('#out-message').addClass('success')
  $('#out-message').fadeOut(5000)
  $('#change-password')[0].reset()
}

const failure = function () {
  $('#up-message').show().text('Error !!!')
  $('#up-message').removeClass()
  $('#up-message').addClass('failure')
  $('#up-message').fadeOut(9000)
  $('#out-message').show().text('Error on password change')
  $('#out-message').removeClass()
  $('#out-message').addClass('failure')
  $('#out-message').fadeOut(4000)
}

const createFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('create food  successfully!!')
  $('#create-food')[0].reset()
  // console.log(' sign up success')
}

const updateFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('updated food  successfully!!')
  const showTabsHtml = showFoodsTemplate({ foods: data.foods })
  $('#food-handlebars').html(showTabsHtml)
  // $('.update-food-form')[0].reset()
}

const getOneFoodSuccess = function (data) {
  $('#feedbackOnOneRow').html(' ')
  $('#feedbackOnOneRow').text('get one food  successfully!!')
  const foodHTML = (`
        <h4> Calendar is  ${data.food.name} </h4>
        <p> Breakfast: ${data.food.breakfast} </p>
        <p> Lunch: ${data.food.lunch} </p>
        <p> Dinner: ${data.food.dinner} </p>
      `)
      //<p> Calendar: ${data.food.calendar} </p>
  $('#feedbackOnOneRow').append(foodHTML)
  // $('#getone-food')[0].reset()
}

const getOneFoodFailure = function () {
  $('#feedbackOnOneRow').html(' ')
  $('#feedbackOnOneRow').text('Error!!!')
}

const getAllFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('get all food  successfully!!')
  // for (const each in data.foods) {
    // console.log('in loop')
    // console.log(data.foods[each].breakfast)
    // $('#feedbackOnAction').append(foodHTML)
  // }
  const showTabsHtml = showFoodsTemplate({ foods: data.foods })
  $('#food-handlebars').html(showTabsHtml)
  $('#sign-up')[0].reset()
}
const deleteOneFoodSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('deleted one food  successfully!!')

  // $('#deleteone-food')[0].reset()
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  createFoodSuccess,
  changePasswordSuccess,
  updateFoodSuccess,
  getOneFoodSuccess,
  getOneFoodFailure,
  getAllFoodSuccess,
  deleteOneFoodSuccess,
  failure
}
