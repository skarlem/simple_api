const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

const Todos = sequelize.define('todos', {
    // Model attributes are defined here
     
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    description: {
        
      type: DataTypes.STRING,
    }
  }, { timestamps: false }); 
  
  
async function getAllTasks(){
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
    
}

async function getOneTask(id){
    try {
        const tasks =  await Todos.findAll(
            {
            raw: true,
            attributes: ['id','description'],
            where: {
                id: id
              }
        });
        return tasks
    } catch (error) {
        console.log(error)
    }
}
async function newTask(info){
    console.log(info)
    try {
        const tasks =  await Todos.create({description: info.description});
        return tasks
    } catch (error) {
        console.log(error)
    }
}
async function deleteTask(id){
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
}
async function updateTask(info,id){
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


const express = require("express");
const app = express();
app.use(express.json())


app.get('/:id', async function(req, res) {
    const id = req.params.id
    const result = await getOneTask(id);
    res.send(result)
})
app.get('/', async function(req, res) {
    const id = req.params.id
    const result = await getAllTasks();
    res.send(result)
})

app.post('/', async function(req, res) {
    const info = req.body
   
    const result = await newTask(info);
    res.send(result)
})

app.delete('/:id', async function(req, res) {
    
    const id = req.params.id
   console.log(id)
    const result = await deleteTask(id);
    if(result){
        res.sendStatus(200)
    }    else{
        res.sendStatus(400)
    }   
   
})
app.patch('/:id', async function(req, res) {
    
    const id = req.params.id
    const info = req.body
   console.log(id)
   console.log(info)
    const result = await updateTask(info,id);
    res.send(result)
})

let port = process.env.APP_PORT || 4000;
app.listen(port, console.log(`Server started at port ${port}`));
