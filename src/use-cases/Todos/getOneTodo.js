module.exports = 
getOneTodo = ({todosDb}) =>{
    return async function get(info){
       
        const result = await todosDb.getOneTask(info);
    
        if(!result || result.length == 0){
            throw new Error('No tasks');
        }
        return result;
    }
}
