// models/Caisse.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Agency from "@/database/models/Agency";

const init_Caisse = (sequelize, Types) => {

class Caisse extends Model {}

  Caisse.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize: connection,
      modelName: "Caisse",
    }
  );

  Caisse.belongsTo(Agency);
  Agency.hasMany(Caisse);

  Caisse.sync({ force: false });

  return Caisse

};
export default init_Caisse(connection, DataTypes);
