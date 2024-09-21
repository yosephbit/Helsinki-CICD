const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/version', (req, res) => {
  res.send('2.7.4')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/mode', (req, res) => {
  res.send('producation')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port', PORT)
})
