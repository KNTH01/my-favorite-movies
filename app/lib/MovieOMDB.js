const request = require('request')
const apiUrl = 'http://www.omdbapi.com/?r=json'

module.exports = {
  search (search, page = 1) {
    return new Promise(function (resolve, reject) {
      request(`${apiUrl}&s=${search}&page=${page}`, function (err, res, body) {
        if (err) {
          reject(err)
        }

        const searchApi = JSON.parse(body)
        resolve({
          page,
          results: searchApi.Search,
          totalResults: searchApi.totalResults,
          sucess: searchApi.Response === 'true' ? true : false
        })
      })
    })
  }
}
