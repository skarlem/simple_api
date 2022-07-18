module.exports = 
addNewUser = ({usersDb}) =>{
    return async function post(info){
        
        const result = await usersDb.newUser(info);
    
        if(!result || result.length == 0){
            throw new Error('Unkown Error Occurred!');
        }
        return result;
    }
}
