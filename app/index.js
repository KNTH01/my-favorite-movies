const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const mongoose = require('mongoose')

const MovieOMDB = require('./lib/MovieOMDB')

const config = process.env.NODE_ENV === 'test' ? require('../config/test.json') : require('../config/default.json')

// setup mongoose promise api
mongoose.Promise = global.Promise

// configure db connection
mongoose.connect(config.dbHost)

// configure view
nunjucks.configure(`${__dirname}/views`, {
  autoescape: true,
  watch: true, // should be true in dev mode only
  express: app
})

// configure public assets
app.use('/assets', express.static('public'))

// set up bodyParser middleware
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const movieRoutes = require('./routes/movies')

// render homepage
app.get('/', (req, res) => {
  res.render('index.njk')
})

// Movies rest api routes
app.get('/search', (req, res) => {
  const search = req.query.s
  MovieOMDB.search(search)
    .then(result => res.send(result))
    .catch(err => {
      res.send({
        success: false,
        error: err
      })
    })
})

app
  .route('/movies')
  .get(movieRoutes.getMovies)
  .post(movieRoutes.postMovie)
app
  .route('/movies/:id')
  .get(movieRoutes.getMovie)
  .delete(movieRoutes.deleteMovie)
  .put(movieRoutes.updateMovie)

module.exports = app
