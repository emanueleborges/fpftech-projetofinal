'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      // define association here
      Clientes.hasMany(models.Vendas, {
        foreignKey: 'Cliente_fk'
      });
    }
  }
  Clientes.init({
    Nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 128],
          msg: "Essse campo deve ter entre 1 e 128 caracteres!" ,
        },
      }
    }
  },
   {
    sequelize,
    modelName: 'Clientes',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false, 
  });
  return Clientes;
};