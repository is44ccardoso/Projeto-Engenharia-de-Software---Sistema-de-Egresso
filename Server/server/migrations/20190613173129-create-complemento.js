'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('complemento', {
      cmp_id: {
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
      endr_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'endereco',
          key: 'endr_id',
          as: 'endr_id',
        },
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('complemento');
  }
};