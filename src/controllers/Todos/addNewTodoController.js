module.exports = function makeAddTodoController({addTodoUseCase}){
    return async function post(req,res,next){
        try {
            const info = req.body
           
        //    const result = req.body;
            const result = await addTodoUseCase(info);
          
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