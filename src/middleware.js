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