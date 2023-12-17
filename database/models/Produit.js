// models/Produits.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import ProduitsCategories from "./ProduitsCategories";
import Account from "./Account";
import Comission from "./Comission";

class Produits extends Model {}

Produits.init(
  {
    name: DataTypes.STRING,
    in_out: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Produits",
  }
);

Produits.belongsTo(ProduitsCategories, { foreignKey: 'cat_id' });
Produits.belongsTo(Account, { foreignKey: 'account_id' });
Produits.belongsTo(Comission, { foreignKey: 'comission_id' });

Produits.sync({ force: false });

export default Produits;
