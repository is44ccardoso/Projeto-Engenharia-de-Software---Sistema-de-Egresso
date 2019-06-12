'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidadeuf', {
      cidadeuf_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ibgemunicipio: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ibgeestado: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ibgepais: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    return queryInterface.dropTable('cidadeuf');
  }
};