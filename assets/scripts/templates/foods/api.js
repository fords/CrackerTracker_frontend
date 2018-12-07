const config = require('../../config')
const store = require('../../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createFood = function (data) {
  return $.ajax({
    url: config.apiUrl + '/foods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'food': data
    }
  })
}

const updateFood = function (data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.food.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'food': data
    }
  })
}

const getOneFood = function (data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.food.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteOneFood = function (data) {
  return $.ajax({
    url: config.apiUrl + '/foods/' + data.food.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'food': data
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createFood,
  getOneFood,
  deleteOneFood,
  updateFood
}
