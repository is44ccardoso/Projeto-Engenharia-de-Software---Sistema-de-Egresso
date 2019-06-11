'use strict';
module.exports = (sequelize, DataTypes) => {
  const cidadeuf = sequelize.define('cidadeuf', {
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    ibgemunicipio: DataTypes.INTEGER,
    ibgeestado: DataTypes.INTEGER,
    pais: DataTypes.STRING,
    ibgepais: DataTypes.INTEGER
  }, {});
  cidadeuf.associate = function(models) {
    cidadeuf.hasMany(models.endereco, {
      foreignKey: 'cidadeuf_id',
      onDelete: 'CASCADE',
    });
  };
  return cidadeuf;
};