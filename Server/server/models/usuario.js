'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    matricula: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    usr_tipo: DataTypes.ENUM('1','2','3'),
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};