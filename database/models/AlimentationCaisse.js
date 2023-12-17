// models/AlimentationCaisses.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Caisse from "./Caisse";
import Account from "./Account";

class AlimentationCaisses extends Model {}

AlimentationCaisses.init(
  {
    montant: DataTypes.DECIMAL(10, 2),
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "AlimentationCaisses",
  }
);

AlimentationCaisses.belongsTo(Caisse, { foreignKey: 'caisse_sender_id' });
AlimentationCaisses.belongsTo(Caisse, { foreignKey: 'caisse_receiver_id' });
AlimentationCaisses.belongsTo(Account, { foreignKey: 'account_sender_id' });

AlimentationCaisses.sync({ force: false });

export default AlimentationCaisses;
