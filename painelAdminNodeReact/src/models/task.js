import Sequelize, { Model } from "sequelize";

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        due_date: Sequelize.DATE,
        effort: Sequelize.INTEGER,
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        order: Sequelize.INTEGER,
        status: Sequelize.ENUM(
          "backlog",
          "doing",
          "done",
          "approved",
          "rejected"
        ),
        user_id: Sequelize.INTEGER,
        project_id: Sequelize.INTEGER,
        path: Sequelize.STRING,
        folder: Sequelize.STRING,
        type: Sequelize.STRING,
        filename: Sequelize.STRING,
        size: Sequelize.INTEGER,
      },
      {
        sequelize,
        name: {
          singular: "task",
          plural: "tasks",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
    });

    this.belongsTo(models.Project, {
      foreignKey: "project_id",
    });
  }
}

export default Task;
