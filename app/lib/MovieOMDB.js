const request = require('request')
const apiUrl = 'http://www.omdbapi.com/?r=json'

module.exports = {
  search (search, page = 1) {
    return new Promise(function (resolve, reject) {
      request(`${apiUrl}&s=${search}&page=${page}`, function (err, res, body) {
        if (err) {
          console.log('deolkdoekdoe')
          reject(err)
        }

        const searchApi = JSON.parse(body)
        let results = []

        if (searchApi.Search) {
          searchApi.Search.forEach(movie => {
            results.push({
              title: movie.Title,
              year: movie.Year,
              imdbID: movie.imdbID,
              type: movie.Type,
              img: movie.Poster
            })
          })
        }

        resolve({
          page,
          results,
          totalResults: searchApi.totalResults,
          success: searchApi.Response === 'True' ? true : false,
          error: searchApi.Error || undefined
        })
      })
    })
  }
}
