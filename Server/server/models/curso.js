'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    nome: DataTypes.STRING,
    data_ini: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {});
  curso.associate = function(models) {
    // associations can be defined here
  };
  return curso;
};