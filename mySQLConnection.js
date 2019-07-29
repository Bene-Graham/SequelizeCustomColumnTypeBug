"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const opt = {
    host: "localhost",
    dialect: "mysql",
};
opt.dialectOptions = {
    decimalNumbers: true
};
opt.logging = (txt) => {
    // tslint:disable-next-line:no-console
    console.log("\x1b[36m%s\x1b[0m", txt);
};
const sequelize = new sequelize_1.Sequelize("testDB", "testUser", "abcd1234", opt);
exports.default = sequelize;
//# sourceMappingURL=mySQLConnection.js.map