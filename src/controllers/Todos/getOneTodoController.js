module.exports = function makeGetOneTodoController({getOneTodoUseCase}){
    return async function fetch(req,res,next){
        try {
            const info = {
                id :req.params.id
            }
           
            const result = await getOneTodoUseCase(info);
          
            const message = {
                msg: 'success',
                data: result,
               
            }
            // res.setHeader('Content-Type', 'application/json')
            res.status(200).send(message);
        } catch (error) {
            console.log('asdasdsa',error)
            res.status(500).send(error.message);
        }
        
    }
}