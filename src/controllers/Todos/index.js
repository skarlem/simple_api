const {
    getAllTodosUseCase,
    getOneTodoUseCase,
    addTodoUseCase,
    updateTodoUseCase,
    deleteTodoUseCase,
}  = require( '../../use-cases/Todos/index');

const makeGetAllTodoController = require('./getAllTodoController');
const makeGetOneTodoController = require('./getOneTodoController')
const makeAddTodoController = require('./addNewTodoController')
const makeUpdateTodoController = require('./updateTodoController')
const makeDeleteTodoController = require('./deleteTodoController')

const addTodoController = makeAddTodoController({addTodoUseCase});
const getAllTodoController = makeGetAllTodoController({getAllTodosUseCase});
const getOneTodoController = makeGetOneTodoController({getOneTodoUseCase});
const updateTodoController = makeUpdateTodoController({updateTodoUseCase});
const deleteTodoController = makeDeleteTodoController({deleteTodoUseCase});



module.exports = {
    getAllTodoController,
    getOneTodoController,
    addTodoController,
    updateTodoController,
    deleteTodoController
}