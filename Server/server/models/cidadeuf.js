'use strict';
module.exports = (sequelize, DataTypes) => {
  const cidadeuf = sequelize.define('cidadeuf', {
    cidadeuf_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    cidade:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    ibgemunicipio:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ibgeestado:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pais:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    ibgepais:{
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    freezeTableName: true,
    tableName: 'cidadeuf',
  });
  cidadeuf.associate = function(models) {
    cidadeuf.hasMany(models.endereco, {
      foreignKey: 'cidadeuf_id',
      onDelete: 'CASCADE',
    });
  };
  return cidadeuf;
};