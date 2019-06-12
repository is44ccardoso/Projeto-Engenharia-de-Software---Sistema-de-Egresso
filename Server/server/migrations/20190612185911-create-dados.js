'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pos_grad: {
        type: Sequelize.BOOLEAN
      },
      pos_tipo: {
        type: Sequelize.ENUM
      },
      trab_area: {
        type: Sequelize.BOOLEAN
      },
      area_atu: {
        type: Sequelize.ENUM
      },
      faixa_sal: {
        type: Sequelize.ENUM
      },
      estudaria: {
        type: Sequelize.BOOLEAN
      },
      quer_pos: {
        type: Sequelize.BOOLEAN
      },
      querp_tipo: {
        type: Sequelize.ENUM
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dados');
  }
};