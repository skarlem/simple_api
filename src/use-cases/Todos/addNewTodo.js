module.exports = 
addNewTodo = ({todosDb}) =>{
    return async function post(info){
        
        const result = await todosDb.newTask(info);
    
        if(!result || result.length == 0){
            throw new Error('Unkown Error Occurred!');
        }
        return result;
    }
}
