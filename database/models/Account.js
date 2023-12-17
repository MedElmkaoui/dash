// models/Accounts.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

class Account extends Model {}

Account.init(
  {
    name: DataTypes.STRING,
    NumAccount: DataTypes.STRING,
    RIB: DataTypes.STRING,
    sold: DataTypes.DECIMAL(10, 2),
  },
  {
    sequelize: connection,
    modelName: "Account",
  }
);

Account.sync({ force: false });

export default Account;
