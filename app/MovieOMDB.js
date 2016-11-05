const request = require('request')
const apiUrl = 'http://www.omdbapi.com/?r=json&s='

module.exports = {
  search (search) {
    return new Promise(function (resolve, reject) {
      request(`${apiUrl}${search}`, function (err, res, body) {
        if (err) {
          reject(err)
        }
        resolve(JSON.parse(body))
      })
    })
  }
}
