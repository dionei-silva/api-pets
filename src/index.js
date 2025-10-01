import express from 'express'
import * as dotenv from 'dotenv'
import {randomUUID} from 'crypto'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/pets', (req, res) => {
  res.send('Hello World!')
})


const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
