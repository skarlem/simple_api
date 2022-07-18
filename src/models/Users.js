require('dotenv').config()

const { Sequelize, Model, DataTypes } = require('sequelize');

var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}
const sequelize = new Sequelize(process.env.DB_URL);

const Users = sequelize.define('user_info', {
    // Model attributes are defined here 
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    firstname: {
        
      type: DataTypes.STRING,
    },
    lastname: {
        
      type: DataTypes.STRING,
    },
    username: {
        
      type: DataTypes.STRING,
    },
    password: {
        
      type: DataTypes.STRING,
    },
    
  }, {timestamps: false,freezeTableName: true}); 
  

  module.exports = Users