const chai = require('chai')
const expect = chai.expect
const MovieOMDB = require('../app/MovieOMDB')

describe('omdb API movies search', function () {
  it('should make a search', function (done) {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'Warcraft'

    MovieOMDB.search(searchMovie).then(result => {
      expect(result.Search).to.be.a('array')
      expect(result.totalResults).to.be.above(0)
      expect(result.Response).to.be.equal('True')

      done()
    })
  })

  it('should have coherent search results', function (done) {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'fast'

    MovieOMDB.search(searchMovie).then(result => {
      expect(result.Search).to.be.a('array')

      result.Search.forEach(movie => {
        expect(movie.Title.toLowerCase().search('fast')).to.be.above(-1)
      })

      done()
    })
  })

  it('should search for a movie that cannot be found', function (done) {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'movie that cannot be found'

    MovieOMDB.search(searchMovie).then(result => {
      result.should.have.property('Response')
      result.should.have.property('Error')
      result.Response.should.be.equal('False')
      result.Error.should.be.equal('Movie not found!')

      done()
    })
  })
})
