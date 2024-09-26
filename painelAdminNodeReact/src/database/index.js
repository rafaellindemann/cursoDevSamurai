import Sequelize from "sequelize";

import config from "../config/database";

import User from "../models/user";
import Project from "../models/project";
import Task from "../models/task";

const models = [User, Project, Task];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
