'use strict';
module.exports = (sequelize, DataTypes) => {
  const dados = sequelize.define('dados', {
    dados_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    pos_grad:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pos_tipo:{
      type: DataTypes.ENUM,
      allowNull: true,
      defaultValue: null,
    },
    trab_area:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    area_atu:{
      type: DataTypes.ENUM,
      allowNull: false,
    },
    faixa_sal:{
      type: DataTypes.ENUM,
      allowNull: false,
    },
    estudaria:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    quer_pos:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    querp_tipo:{
      type: DataTypes.ENUM,
      allowNull: true,
      defaultValue: null,
    },
  }, {
    freezeTableName: true,
    tableName: 'dados',
  });
  dados.associate = function(models) {
    // associations can be defined here
  };
  return dados;
};