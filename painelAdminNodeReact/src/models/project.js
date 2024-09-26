import Sequelize, { Model } from "sequelize";

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        status: Sequelize.ENUM("active", "archived"),
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        name: {
          singular: "project",
          plural: "projects",
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
    });

    this.hasMany(models.Task);
  }
}

export default Project;
