const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('../index')
const Movie = require('../app/models/Movie')

chai.use(chaiHttp)
chai.should()

describe('Movies Rest API', () => {
  // empty the movies db before each test
  beforeEach((done) => {
    Movie.remove({}, (err) => {
      expect(err).to.be.null
      done()
    })
  })

  describe('/GET movies', () => {
    it('it should GET all the favorite movies', (done) => {
      chai.request(server).get('/movies').end((err, res) => {
        expect(err).to.be.null
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.equal(0)
        done()
      })
    })
  })

  describe('/POST movies', () => {
    it('it should not POST a movie without title field', (done) => {
      const movie = {
        year: 2016,
        type: 'movie'
      }

      chai.request(server).post('/movies').send(movie).end((err, res) => {
        expect(err).to.be.null
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('errors')
        res.body.errors.should.have.property('title')
        res.body.errors.title.should.have.property('kind').equal('required')
        done()
      })
    })

    it('it should POST a movie ', (done) => {
      const movie = {
        title: 'Warcraft',
        year: 2016,
        type: 'movie'
      }
      chai.request(server).post('/movies').send(movie).end((err, res) => {
        expect(err).to.be.null
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message').equal('Movie successfully added!')
        res.body.movie.should.have.property('title')
        res.body.movie.should.have.property('type')
        res.body.movie.should.have.property('year')
        done()
      })
    })
  })

  describe('/GET/:id movies', () => {
    it('it should GET a movie by the given id', (done) => {
      const movie = new Movie({
        title: 'Warcraft',
        year: 2016,
        type: 'movie'
      })

      movie.save((err, movie) => {
        expect(err).to.be.null
        chai.request(server).get('/movies/' + movie.id).send(movie).end((err, res) => {
          expect(err).to.be.null
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('title')
          res.body.should.have.property('year')
          res.body.should.have.property('_id').equal(movie.id)
          done()
        })
      })
    })
  })

  describe('/PUT/:id movies', () => {
    it('it should UPDATE a movie given the id', (done) => {
      const movie = new Movie({
        title: 'Warcraft',
        year: 2016,
        type: 'movie'
      })

      movie.save((err, movies) => {
        expect(err).to.be.null

        chai.request(server).put('/movies/' + movie.id).send({title: 'Warcraft 2', year: 2020}).end((err, res) => {
          expect(err).to.be.null
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').equal('Movie updated!')
          res.body.movie.should.have.property('title').equal('Warcraft 2')
          res.body.movie.should.have.property('year').equal(2020)
          done()
        })
      })
    })
  })

  describe('/DELETE/:id movies', () => {
    it('it should DELETE a movies given the id', (done) => {
      const movie = new Movie({
        title: 'Warcraft',
        year: 2016,
        type: 'movie'
      })

      movie.save((err, movie) => {
        expect(err).to.be.null

        chai.request(server).delete('/movies/' + movie.id).end((err, res) => {
          expect(err).to.be.null

          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').equal('Movie successfully deleted!')
          res.body.result.should.have.property('ok').equal(1)
          res.body.result.should.have.property('n').equal(1)
          done()
        })
      })
    })
  })
})
