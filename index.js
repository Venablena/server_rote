const express = require('express')
const app = express()
const morgan = require('morgan')
const parser = require('body-parser')
const port = process.env.PORT || 3000
app.disable('x-powered-by')
app.use(parser.json())

app.get('/index', (req, res, next) => {
  res.json({message: "Put some things here!"})
})

app.use((req, res) => {
  res.status(404).json({message: "Derp, it's not here!"})
})

app.use((err, req, res, next) => {
  const status = err.status
  res.status(500).json({message: err})
})

app.listen(port)
