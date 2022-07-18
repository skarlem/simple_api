module.exports = 
deleteTodo = ({todosDb}) =>{
    return async function del(info){
       
        const result = await todosDb.getOneTask(info);
    
        if(!result || result.length == 0){
            throw new Error('No tasks');
        }
        return result;
    }
}
