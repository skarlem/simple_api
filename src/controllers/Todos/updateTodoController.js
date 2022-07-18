module.exports = function makeUpdateTodoController({updateTodoUseCase}){
    return async function patch(req,res,next){
        try {
            const info = {
                id : req.params.id,
                data : req.body,
            }
           
           const result = info;
           console.log(result)
            // const result = await updateTodoUseCase(info);
          
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