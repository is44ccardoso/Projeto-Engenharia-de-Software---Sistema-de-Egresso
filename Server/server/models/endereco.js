'use strict';
module.exports = (sequelize, DataTypes) => {
  const endereco = sequelize.define('endereco', {
    endr_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    endr_tipo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    logradouro:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    tableName: 'endereco',
  });
  endereco.associate = function(models) {
    endereco.belongsTo(models.cidadeuf, {
      foreignKey: 'cidadeuf_id',
      onDelete: 'CASCADE',
    });
  };
  return endereco;
};