const config = require('../../config')
// const store = require('../../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const createFood = function (data) {
  return $.ajax({
    url: config.apiUrl + '/foods',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  createFood
}
