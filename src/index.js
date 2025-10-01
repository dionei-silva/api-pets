import express from 'express'
import * as dotenv from 'dotenv'
import {randomUUID} from 'crypto'
import { logMiddleware } from './middleware.js'

import {pets} from './pets.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(logMiddleware)

//GET
app.get('/pets', (req, res) => {
  let data = pets
  try {
    res.status(200).send({
      ok: true,
      message: "Pets listados com sucesso",
      data
    })
    
  } catch (error) {
    res.status(500).send({
      ok: false,
      Message: error.toString()
    })
  }
})



const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
