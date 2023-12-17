// models/Charges.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import User from "./User";

class Charges extends Model {}

Charges.init(
  {
    label: DataTypes.STRING,
    note: DataTypes.STRING,
    montant: DataTypes.DECIMAL(10, 2),
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "Charges",
  }
);

Charges.belongsTo(User);

Charges.sync({ force: false });

export default Charges;
