import express from 'express'
import Cookies from 'cookies'

const app = express()

app.use(Cookies.express())

app.get('/', (req, res) => {
  res.cookie.set('a', 'b')
})
