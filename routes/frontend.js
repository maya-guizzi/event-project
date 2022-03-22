// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Event = mongoose.model('events')
const User = mongoose.model('users')


// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/', async (req,res) => {
  // render the list of articles
  const events = await Event.find().lean()
  console.log(events)
  res.render('homepage', {
    events:events
  })
})

router.post('/events/create', async (req,res) => {
  // create  a new document on the database
  await Event.create(req.body)
  // console.log(req.body)
  res.render('new-event', {})
})

router.get('/events/create', (req,res) => {
  res.render('new-event', {})
})

router.get('/register', (req,res) => {
  res.render('register')
})

router.post('/register', async (req,res) => {
  // create  a new document on the database
  await User.create(req.body)
  // console.log(req.body)
  res.render('register', {})
})

router.get('/event/:id', async (req,res) => {
  // res.render('event-details')
  const events = await Event.find({
    _id: req.params.id
  }).lean()
  console.log(events)
  res.render('event-details', {
    events:events
  })
})

router.post('/event/:id', async (req,res) => {
  // create  a new document on the database
  await User.create(req.body)
  // console.log(req.body)
  res.render('event-details', {})
})

router.get('/events/:id', () => {
  
})

// export the requests
module.exports = router;