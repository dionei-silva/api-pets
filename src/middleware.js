import { pets } from "./pets.js"

export const logMiddleware = (req, res, next) => {
      console.log('Middleware!!!!!!!');
      next()
}

export const checkPetIdMiddleware = (req, res, next) => {
      try {
      const {id} = req.params
  
    const pet = pets.find((item)=> item.id === id)   
    if(!pet){
      return res.status(404).send({
        ok:false,
        message: "Pet nao encontrado"
      })
    } 
      req.pet = pet
      next()
      } catch (error) {
            return res.status(500).send({
                  ok:false,
                  mensage: error.toString()
            })
      }
}

export const validatePetMiddleware = (req, res, next) => {
      try {
            const {nome, idade, raca, nomeTutor} = req.body

            if (!nome) {
                  return res.status(400).send({
                        ok:false,
                        mensagem: "O campo nome nao foi informado"
                  })                  
            }
            if (!raca) {
                  return res.status(400).send({
                        ok:false,
                        mensagem: "O campo raca nao foi informado"
                  })                  
            }
            if (!idade) {
                  return res.status(400).send({
                        ok:false,
                        mensagem: "O campo idade nao foi informado"
                  })               
            }
            if (!nomeTutor) {
                  return res.status(400).send({
                        ok:false,
                        mensagem: "O campo nome do tutor nao foi informado"
                  }) 
            }  
            next()
      } catch (error) {
            console.log(error);
            return res.status(500).send({
                  ok:false,
                  mensage: error.toString()
            })
            
      }
}