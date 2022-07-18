module.exports = function makeGetAllTodoController({getAllTodosUseCase}){
    return async function fetch(req,res,next){
        try {
            const result = await getAllTodosUseCase();
            console.log(result)
            const message = {
                msg: 'success',
                data: result,
               
            }
            // res.setHeader('Content-Type', 'application/json')
            res.status(200).send(message);
        } catch (error) {
            console.log('asdasdsa',error)
            res.status(400).send(error.message);
        }
        
    }
}