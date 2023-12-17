// models/CaisseSolde.js
import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import Caisse from "./Caisse";

class CaisseSolde extends Model {}

CaisseSolde.init(
  {
    sold: DataTypes.DECIMAL(10, 2),
    date: DataTypes.DATE,
  },
  {
    sequelize: connection,
    modelName: "CaisseSolde",
  } 
);

CaisseSolde.belongsTo(Caisse);
Caisse.hasMany(CaisseSolde);

CaisseSolde.sync({ force: false });

export default CaisseSolde;
