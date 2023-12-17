import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_Agency = (sequelize, Types) => {

  class Agency extends Model {}
  Agency.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize: connection,
      modelName: "Agency",
    }
  );
  
  Agency.sync({force: false})

  return Agency;
};

export default init_Agency(connection, DataTypes);