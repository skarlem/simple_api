const {usersDb} = require('../../data-access/Users/usersDb');


const addNewUser= require('./addNewUser.js')



const addNewUserUseCase = addNewUser({usersDb});

module.exports = {
    addNewUserUseCase,
    
}