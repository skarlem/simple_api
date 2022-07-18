const {todosDb} = require('../../data-access/Todos/todosDb');

const getAllTodos = require('./getAllTodos')
const getOneTodo = require('./getOneTodo')
const addNewTodo = require('./addNewTodo.js')
const updateTodo = require('./updateTodo')
const deleteTodo = require('./deleteTodo')


const getAllTodosUseCase = getAllTodos({todosDb});
const getOneTodoUseCase = getOneTodo({todosDb});
const  addTodoUseCase = addNewTodo({todosDb});
const updateTodoUseCase = updateTodo({todosDb});
const deleteTodoUseCase = deleteTodo({todosDb})
module.exports = {
    getAllTodosUseCase,
    getOneTodoUseCase,
    addTodoUseCase,
    updateTodoUseCase,
    deleteTodoUseCase
}