'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      // define association here
      Produtos.hasMany(models.Vendas, {
        foreignKey: 'Produto_fk'
      });
    }
  }
  Produtos.init({
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
    modelName: 'Produtos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false, 
  });
  return Produtos;
};