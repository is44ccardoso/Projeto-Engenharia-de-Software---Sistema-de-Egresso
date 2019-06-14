'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      usr_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usr_tipo: {
        type: Sequelize.ENUM('1','2','3'),
        allowNull: true,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      curso_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'curso',
          key: 'curso_id',
          as: 'curso_id',
        },
        allowNull: false,
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};