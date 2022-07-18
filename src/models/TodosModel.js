

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

const Todos = sequelize.define('todos', {
    // Model attributes are defined here 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    description: {
        
      type: DataTypes.STRING,
    },
    status: {
        
      type: DataTypes.BOOLEAN,
    },
    user_id: {
        
      type: DataTypes.INTEGER,
    },
    created_at: {
        
      type: DataTypes.DATE,
    },
    updated_at: {
        
      type: DataTypes.DATE,
    }
  }, {timestamps: false}); 
  

  module.exports = Todos