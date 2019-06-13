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
    complemento.belongsTo(models.endereco,{
      foreignKey: 'endr_id',
      onDelete: 'CASCADE',
    });
    complemento.belongsTo(models.usuario,{
      foreignKey: 'usr_id',
      onDelete: 'CASCADE',
    });
  };
  return complemento;
};