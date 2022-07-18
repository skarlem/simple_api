
const Users = require('../../models/Users')
const { DateTime } = require("luxon");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const usersDb = {
   
    getAllUsers: async() =>{
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

   getOneUser: async function ( info ){
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

   newUser: async function (info){
    //   const hashedPassword = await bcrypt.hashSync(info.password, process.env.PASSWORD_SALT);
    console.log('infooooooo',info)
    let hashedPassword = '';
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(info.password, salt);
    // bcrypt.genSalt(saltRounds, function(err,salt) {
    //     bcrypt.hash(info.password, process.env.PASSWORD_SALT, function(err, hash) {
    //         console.log('QQQQQQQ',hash)
    //         hashedPassword = hash
    //     });
    // });
     const firstname = info.firstname;
     console.log('asdasdas',firstname)
       try {
           const user =  await Users.create({
                firstname: firstname,
                lastname: info.lastname,
                username: info.username,
                password : hash,
                
            });
           return user
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
           const tasks =  await Todos.update({description: info.description},
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
   usersDb
}