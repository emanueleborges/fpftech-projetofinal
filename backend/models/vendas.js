'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    static associate(models) {
      // define association here
      Vendas.belongsTo(models.Clientes, {
        foreignKey: 'Cliente_fk'
      });
      Vendas.belongsTo(models.Produtos, {
        foreignKey: 'Produto_fk'
      });
    }
  }
  Vendas.init({
    Cliente_fk: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 16],
          msg: "Essse campo deve ter entre 1 e 16 caracteres!" ,
        },
      }
    },
    Produto_fk: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 16],
          msg: "Essse campo deve ter entre 1 e 16 caracteres!" ,
        },
      }
    },
    Quantidade: {
      type: DataTypes.INTEGER,
      validate: {
       
        notEmpty: {
          msg: "Essse campo não pode ser nulo!" ,
        },
        len: {
          args: [1, 16],
          msg: "Essse campo deve ter entre 1 e 16 caracteres!" ,
        },
        min: 1,
      }
    } 
  }, 
  {
    sequelize,
    modelName: 'Vendas',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Vendas;
};