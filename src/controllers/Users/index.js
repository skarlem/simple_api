const {
    addNewUserUseCase
} = require( '../../use-cases/Users/index');

const makeAddUserController = require('./addNewUserController');
    
console.log('asdasdasd',addNewUserUseCase)
const addUserController = makeAddUserController({addNewUserUseCase});

module.exports = {
    addUserController
}