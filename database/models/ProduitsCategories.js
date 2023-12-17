// models/ProduitsCategories.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

class ProduitsCategories extends Model {}

ProduitsCategories.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "ProduitsCategories",
  }
);

ProduitsCategories.sync({ force: false });

export default ProduitsCategories;
