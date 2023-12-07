import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_Agency = (sequelize, Types) => {
  class Agency extends Model {}
  Agency.init(
    {
      name: DataTypes.STRING,
      adresse: DataTypes.STRING,
      ville: DataTypes.STRING,
      fix: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "agencies",
    }
  );

  Agency.sync({force: false})
  return Agency;
};

export default init_Agency(connection, DataTypes);