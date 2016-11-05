const Movie = require('../models/Movie')

function getMovies (req, res) {
  Movie
    .find({})
    .exec((err, movies) => {
      if (err) {
        return res.send(err)
      }

      return res.json(movies)
    })
}

function postMovie (req, res) {
  const newMovie = new Movie(req.body)

  newMovie.save((err, movie) => {
    if (err) {
      return res.send(err)
    }

    return res.json({
      message: 'Movie successfully added!',
      movie
    })
  })
}

function getMovie (req, res) {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      return res.send(err)
    }

    return res.json(movie)
  })
}

function deleteMovie (req, res) {
  Movie.remove({_id: req.params.id}, (err, result) => {
    if (err) {
      return res.send(err)
    }

    return res.json({ message: 'Movie successfully deleted!', result })
  })
}

function updateMovie (req, res) {
  Movie.findById({_id: req.params.id}, (err, movie) => {
    if (err) {
      return res.send(err)
    }

    Object.assign(movie, req.body).save((err, movie) => {
      if (err) {
        return res.send(err)
      }
      return res.json({ message: 'Movie updated!', movie })
    })
  })
}

module.exports = { getMovies, postMovie, getMovie, deleteMovie, updateMovie }
