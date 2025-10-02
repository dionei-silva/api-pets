import { pets } from "./pets.js"

export const logMiddleware = (req, res, next) => {
      console.log('Middleware!!!!!!!');
      next()
}

export const validateIdPetMiddleware = (req, res, next) => {
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