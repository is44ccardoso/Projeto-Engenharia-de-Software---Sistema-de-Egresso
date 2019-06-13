'use strict';
module.exports = (sequelize, DataTypes) => {
  const complemento = sequelize.define('complemento', {
    cmp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    numero:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    complemento:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    telefone:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    tableName: 'complemento',
  });
  complemento.associate = function(models) {
    // associations can be defined here
  };
  return complemento;
};