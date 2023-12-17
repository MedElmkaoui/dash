// models/AlimentationAccounts.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Account from "./Account";
import Caisse from "./Caisse";

class AlimentationAccounts extends Model {}

AlimentationAccounts.init(
  {
    montant: DataTypes.DECIMAL(10, 2),
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "AlimentationAccounts",
  }
);

AlimentationAccounts.belongsTo(Account, { foreignKey: 'account_sender_id' });
AlimentationAccounts.belongsTo(Account, { foreignKey: 'account_receiver_id' });
AlimentationAccounts.belongsTo(Caisse, { foreignKey: 'caisse_sender_id' });

AlimentationAccounts.sync({ force: false });

export default AlimentationAccounts;
