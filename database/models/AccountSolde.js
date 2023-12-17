// models/AccountSoldes.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Account from "./Account";

class AccountSoldes extends Model {}

AccountSoldes.init(
  {
    sold: DataTypes.DECIMAL(10, 2),
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "AccountSoldes",
  }
);

AccountSoldes.belongsTo(Account);
Account.hasMany(AccountSoldes);

AccountSoldes.sync({ force: false });

export default AccountSoldes;
