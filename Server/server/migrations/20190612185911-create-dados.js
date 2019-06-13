'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dados', {
      dados_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usr_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'usuario',
          key: 'usr_id',
          as: 'usr_id',
        },
        allowNull: false,
      },
      pos_grad: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      pos_tipo: {
        type: Sequelize.ENUM('1','2','3','4','5'),
        allowNull: true,
        defaultValue: null,
      },
      trab_area: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      area_atu: {
        type: Sequelize.ENUM('1','2','3','4','5'),
        allowNull: false,
      },
      faixa_sal: {
        type: Sequelize.ENUM('1','2','3','4'),
        allowNull: false,
      },
      estudaria: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      quer_pos: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      querp_tipo: {
        type: Sequelize.ENUM('1','2','3','4','5'),
        allowNull: true,
        defaultValue: null,
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