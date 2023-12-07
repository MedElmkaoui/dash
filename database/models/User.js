

import { Model, DataTypes, Sequelize } from "sequelize";
import connection from "../connection";


const init_User = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      tel: DataTypes.STRING,
      salary: DataTypes.DECIMAL(10, 2), // Adjust the precision and scale as needed
      cin: DataTypes.STRING,
      password: DataTypes.STRING,
      dateInscription: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "users",
    }
  );

  User.sync({ force: false });
  return User;
};

const UserModel = init_User(connection, DataTypes);

export default UserModel;
