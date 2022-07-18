module.exports = 
getAllTodos = ({todosDb}) =>{
    return async function get(info){
       
        const result = await todosDb.getAllTasks();
    
        if(!result || result.length == 0){
            throw new Error('No tasks');
        }
        return result;
    }
}
