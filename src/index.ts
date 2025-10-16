import express from 'express'
import Cookies from 'cookies'

const app = express()

app.use(Cookies.express(['mykey']))

app.get('/', (req, res) => {
  res.cookies.set('a', 'b')
})
