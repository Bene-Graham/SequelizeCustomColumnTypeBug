import Big from "big.js";
import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "./mySQLConnection";

export class MyTestModel extends Model {
    public id!: number;
    public amount!: Big;
    public myInt!: number;
}

MyTestModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: new DataTypes.BIGJS(13, 4),
    myInt: new DataTypes.NEWTYPE()
}, {
    sequelize: connection,
    tableName: "MyTestModel",
});
