
const Todos = require('../../models/TodosModel')
const { DateTime } = require("luxon");
const todosDb = {
   
    getAllTasks: async() =>{
       try {
           const tasks =  await Todos.findAll(
               {
               raw: true,
               attributes: ['id','description']
           });
           return tasks
       } catch (error) {
       console.log(error) 
       }
       
   },

   getOneTask: async function ( info ){
       try {
           const tasks =  await Todos.findAll(
               {
               raw: true,
               attributes: ['id','description'],
               where: {                   
                   id: info.id
               }
           });
           return tasks
       } catch (error) {
           console.log(error)
       }
   },

   newTask: async function (info){
       console.log(info)
       try {
           const tasks =  await Todos.create({
                description: info.description,
                user_id: info.user_id,
                status: info.status,
                created_at : DateTime.utc().toISO(),
                updated_at: DateTime.utc().toISO()
            });
           return tasks
       } catch (error) {
           console.log(error)
       }
   },


   deleteTask: async function (id){
       try {
           const tasks =  await Todos.destroy(
               {
               where: {
                   id: id
               }
           });
           return tasks
       } catch (error) {
           console.log(error)
       }
   },
   updateTask: async function (info,id){
       try {
           const tasks =  await Todos.update({
            description: info.data.description,
            status: info.data.status,
            updated_at : DateTime.utc().toISO()
            },
               {   
               where: {
                   id: id
               },
               returning: true
           });
           return tasks
       } catch (error) {
           console.log(error)
       }
   }
}

module.exports = {
   todosDb
}