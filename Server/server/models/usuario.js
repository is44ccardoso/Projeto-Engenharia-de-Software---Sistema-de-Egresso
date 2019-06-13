'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    usr_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    matricula:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senha:{
      type: DataTypes.STRING,
      allowNull: false
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    usr_tipo:{
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      defaultValue: 1,
    }
  }, {
    freezeTableName: true,
    tableName: 'usuario',
  });
  usuario.associate = function(models) {
    
  };
  return usuario;
};