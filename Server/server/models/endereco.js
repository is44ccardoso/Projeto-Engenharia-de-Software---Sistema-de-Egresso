'use strict';
module.exports = (sequelize, DataTypes) => {
  const endereco = sequelize.define('endereco', {
    endr_tipo: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {});
  endereco.associate = function(models) {
    endereco.belongsTo(models.cidadeuf, {
      foreignKey: 'cidadeuf_id',
      onDelete: 'CASCADE',
    });
  };
  return endereco;
};