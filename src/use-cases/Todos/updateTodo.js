module.exports = 
updateTodo = ({todosDb}) =>{
    return async function patch(info){
        
        const result = await todosDb.updateTask(info);
    
        if(!result || result.length == 0){
            throw new Error('Unkown Error Occurred!');
        }
        return result;
    }
}
