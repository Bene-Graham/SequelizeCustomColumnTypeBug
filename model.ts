import { DataTypes, Model, Sequelize } from "sequelize";
import BigJsCol from "./BigJsColumn";
import connection from "./mySQLConnection";

BigJsCol(Sequelize);

export class MyTestModel extends Model {
    public id!: number;
    public amount!: string;
}

MyTestModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: new DataTypes.BIGJS(13, 4)
}, {
    sequelize: connection,
    tableName: "MyTestModel",
});
