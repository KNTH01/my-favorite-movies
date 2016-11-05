const chai = require('chai')
const expect = chai.expect

describe('MovieDB search', function () {
  it('should make a search', function (done) {
    let searchMovie = 'fast'

    MovieDB.search(searchMovie).then(result => {
      expect(result.Search).to.be.a('array')
      expect(result.totalResults).to.be.above(0)
      expect(result.Response).to.be.equal('True')
      done()
    })
  })

  it('should have coherent search results', function (done) {
    let searchMovie = 'Warcraft'

    MovieDB.search(searchMovie).then(result => {
      expect(result).to.be.a('array')
      done()
    })
  })
})
