import express from 'express'
import * as dotenv from 'dotenv'
import {randomUUID} from 'crypto'
import {logMiddleware, validateIdPetMiddleware } from './middleware.js'

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

// POST
app.post('/pets', (req, res) =>{
  try {
    const body = req.body

    const newPet = {
        id: randomUUID(),
        nome: body.nome,
        raca: body.raca,
        idade: body.idade,
        nomeTutor: body.nomeTutor
    }

    pets.push(newPet)

    res.status(200).send({
      ok:true,
      message: "Pet cadastrado com sucesso",
      dados: pets
    })
  } catch (error) {
    res.status(500).send({
      ok:false,
      message: error.toString()
    })
  }
})

// GETid
app.get('/pets/:id',[validateIdPetMiddleware], (req, res) => {    
    res.status(200).send({
      ok:true,
      message: "Pet encontrado com sucesso",
      dados: req.pet
    })
  })



const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
