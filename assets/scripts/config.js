'use strict'

let apiUrl
const apiUrls = {
  production: 'https://protected-dusk-49933.herokuapp.com/a',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
