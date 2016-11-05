const app = require('./app')
let port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'test') {
  port = 3030
}

app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log(`Server booted at: http://localhost:${port}`)
})

module.exports = app
