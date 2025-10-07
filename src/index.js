import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import {randomUUID} from 'crypto'
import { validatePetMiddleware } from './middleware.js'

import {pets} from './pets.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

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
app.post('/pets',[validatePetMiddleware], (req, res) =>{
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
app.get('/pets/:id', (req, res) => { 
  try {
    const {id} = req.params

  const pet = pets.find((item)=> item.id === id)   
  if(!pet){
    return res.status(404).send({
      ok:false,
      message: "Pet nao encontrado"
    })
  } 
    res.status(200).send({
      ok:true,
      message: "Pet encontrado com sucesso",
      dados: pet
    })
  } catch (error) {
  return res.status(500).send({
        ok:false,
        mensage: error.toString()
  })
}
})

//PUT
 app.put('/pets/:id',[validatePetMiddleware], (req, res) => {
  const {id} = req.params
  const{nome, raca, idade, nomeTutor} = req.body

  const pet = pets.find((item)=> item.id === id)   
  if(!pet){
    return res.status(404).send({
      ok:false,
      message: "Pet nao encontrado"
    })
  } 
  pet.nome = nome
  pet.raca = raca
  pet.idade = idade
  pet.nomeTutor = nomeTutor
  
  res.status(200).send({
    ok: true,
    message: "Pet atualizado!",
    dados: pets
  })
}) 

//DELETE
app.delete('/pets/:id', (req, res) => {
  const {id} = req.params

  const petIndex = pets.findIndex(item=> item.id === id)
  if(petIndex < 0){
   return res.status(404).send({
      ok: false,
      message: "Pet nao encontrado"
    })
  }
  pets.splice(petIndex,1)
  res.status(200).send({
    ok: true,
    message: "Pet excluido com sucesso!",
    dados: pets
  })
})



const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
