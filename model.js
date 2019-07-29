"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const BigJsColumn_1 = require("./BigJsColumn");
const mySQLConnection_1 = require("./mySQLConnection");
BigJsColumn_1.default(sequelize_1.Sequelize);
class MyTestModel extends sequelize_1.Model {
}
exports.MyTestModel = MyTestModel;
MyTestModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: new sequelize_1.DataTypes.BIGJS(13, 4)
}, {
    sequelize: mySQLConnection_1.default,
    tableName: "MyTestModel",
});
//# sourceMappingURL=model.js.map