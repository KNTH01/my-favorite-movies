const chai = require('chai')
const expect = chai.expect

describe('omdb API movies search', function () {
  it('should make a search', function (done) {
    let searchMovie = 'fast'

    MoviesOMDB.search(searchMovie).then(result => {
      expect(result.Search).to.be.a('array')
      expect(result.totalResults).to.be.above(0)
      expect(result.Response).to.be.equal('True')
      done()
    })
  })

  it('should have coherent search results', function (done) {
    let searchMovie = 'Warcraft'

    MoviesOMDB.search(searchMovie).then(result => {
      expect(result).to.be.a('array')
      done()
    })
  })
})
