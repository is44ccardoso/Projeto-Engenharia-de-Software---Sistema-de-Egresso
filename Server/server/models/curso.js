'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    curso_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_ini:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_fim:{
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'curso',
  });
  curso.associate = function(models) {
    // associations can be defined here
  };
  return curso;
};