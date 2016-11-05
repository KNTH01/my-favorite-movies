const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const mongoose = require('mongoose')
const config = process.env.NODE_ENV === 'test' ? require('../config/test.json') : require('../config/default.json')

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

// render homepage
app.get('/', (req, res) => {
  res.render('index.njk')
})

module.exports = app
