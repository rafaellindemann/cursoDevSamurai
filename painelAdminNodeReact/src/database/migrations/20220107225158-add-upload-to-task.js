"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("tasks", "path", {
      type: Sequelize.DataTypes.STRING,
    });

    queryInterface.addColumn("tasks", "folder", {
      type: Sequelize.DataTypes.STRING,
    });

    queryInterface.addColumn("tasks", "type", {
      type: Sequelize.DataTypes.STRING,
    });

    queryInterface.addColumn("tasks", "filename", {
      type: Sequelize.DataTypes.STRING,
    });

    queryInterface.addColumn("tasks", "size", {
      type: Sequelize.DataTypes.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return Promisse.all([
      queryInterface.removeColumn("tasks", "path"),
      queryInterface.removeColumn("tasks", "folder"),
      queryInterface.removeColumn("tasks", "type"),
      queryInterface.removeColumn("tasks", "filename"),
      queryInterface.removeColumn("tasks", "size"),
    ]);
  },
};
