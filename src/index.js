// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/postgres');

// const Todos = sequelize.define('todos', {
//     // Model attributes are defined here 
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//       },
//     description: {
        
//       type: DataTypes.STRING,
//     }
//   }, { timestamps: false }); 
  
require('dotenv').config()

const express = require('express');
// import express, { json } from "express";
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// app.use(json());


// app.get('/:id', async function(req, res) {
//     const id = req.params.id
//     const result = await getOneTask(id);
//     res.send(result)
// })
// app.get('/', async function(req, res) {
//     const id = req.params.id
//     const result = await getAllTasks();
//     res.send(result)
// })

// app.post('/', async function(req, res) {
//     const info = req.body
   
//     const result = await newTask(info);
//     res.send(result)
// })

// app.delete('/:id', async function(req, res) {
    
//     const id = req.params.id
//    console.log(id)
//     const result = await deleteTask(id);
//     if(result){
//         res.sendStatus(200)
//     }    else{
//         res.sendStatus(400)
//     }   
   
// })
// app.patch('/:id', async function(req, res) {
    
//     const id = req.params.id
//     const info = req.body
//    console.log(id)
//    console.log(info)
//     const result = await updateTask(info,id);
//     res.send(result)
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.use("/todos", require('./routes/Todos/todoRoutes'))
app.use("/users",require('./routes/Users/UsersRoutes'))


let port = process.env.APP_PORT || 4000;
app.listen(port, console.log(`Server started at port ${port}`));
