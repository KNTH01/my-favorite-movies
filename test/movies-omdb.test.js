const chai = require('chai')
const expect = chai.expect
const MovieOMDB = require('../app/lib/MovieOMDB')

describe('omdb API movies search', function () {
  it('should make a search', function () {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'Warcraft'

    return MovieOMDB.search(searchMovie)
      .then(result => {
        expect(result.page).to.be.equal(1)
        expect(result.results).to.be.a('array')
        expect(result.totalResults).to.be.above(0)
        expect(result.success).to.be.true
      })
  })

  it('should have coherent search results', function () {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'fast'

    return MovieOMDB.search(searchMovie).then(result => {
      expect(result.results).to.be.a('array')

      return result.results.forEach(movie => {
        expect(movie.title.toLowerCase().search('fast')).to.be.above(-1)
      })
    })
  })

  it('should search for a movie that cannot be found', function (done) {
    // omdb api is quite long to response
    this.timeout(10000)

    const searchMovie = 'movie that cannot be found'

    MovieOMDB.search(searchMovie).then(result => {
      result.should.have.property('success')
      expect(result.success).to.be.false
      result.should.have.property('error')
      expect(result.error).to.be.equal('Movie not found!')

      done()
    })
  })
})
