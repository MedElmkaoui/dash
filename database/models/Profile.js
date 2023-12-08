import { Model, DataTypes } from "sequelize";
import connection from "../connection";
import User from "./User";

const init_Profile = (sequelize, Types) => {
    class Profile extends Model {}

    Profile.init(
    {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        image: DataTypes.STRING,
        salary: DataTypes.DECIMAL(10, 2),
        address: DataTypes.STRING,
    },
    {
        sequelize: connection,
        modelName: "Profile",
    }
    );

    Profile.belongsTo(User);
    User.hasOne(Profile);

    Profile.sync({ force: false });
    return Profile;
}

export default init_Profile(connection, DataTypes);

