

import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_User = (sequelize, Types) => {
  class User extends Model {}

  User.init(
    {
      username: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize: connection,
      modelName: "User",
    }
  );

  User.sync({ force: false });
  return User;
}

export default init_User(connection, DataTypes);

