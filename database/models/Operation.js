// models/Operations.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Produit from "./Produit";
import Caisse from "./Caisse";
import User from "./User";

class Operations extends Model {}

Operations.init(
  {
    montant: DataTypes.DECIMAL(10, 2),
    in_out: DataTypes.STRING,
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "Operations",
  }
);

Operations.belongsTo(Produit, { foreignKey: 'product_id' });
Operations.belongsTo(Caisse, { foreignKey: 'caisse_id' });
Operations.belongsTo(User, { foreignKey: 'user_id' });

Operations.sync({ force: false });

export default Operations;
