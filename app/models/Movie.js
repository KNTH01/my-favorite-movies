const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie schema definition
const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    type: { type: String, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now }
  }
)

// add createdAt property before saving a new record
MovieSchema.pre('save', next => {
  if (!this.createdAt) {
    this.createdAt = new Date()
  }
  next()
})

// exports mongoose Movie model
module.exports = mongoose.model('Movie', MovieSchema)
