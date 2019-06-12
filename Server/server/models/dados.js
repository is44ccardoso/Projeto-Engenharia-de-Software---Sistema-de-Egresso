'use strict';
module.exports = (sequelize, DataTypes) => {
  const dados = sequelize.define('dados', {
    pos_grad: DataTypes.BOOLEAN,
    pos_tipo: DataTypes.ENUM,
    trab_area: DataTypes.BOOLEAN,
    area_atu: DataTypes.ENUM,
    faixa_sal: DataTypes.ENUM,
    estudaria: DataTypes.BOOLEAN,
    quer_pos: DataTypes.BOOLEAN,
    querp_tipo: DataTypes.ENUM
  }, {});
  dados.associate = function(models) {
    // associations can be defined here
  };
  return dados;
};