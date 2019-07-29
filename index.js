"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const model_1 = require("./model");
const mySQLConnection_1 = require("./mySQLConnection");
const doWork = async () => {
    await mySQLConnection_1.default.sync();
    await model_1.MyTestModel.destroy({
        where: {
            id: {
                [sequelize_1.Op.gt]: 0
            }
        }
    });
    await model_1.MyTestModel.create({
        amount: 99.76,
    });
    await model_1.MyTestModel.create({
        amount: 10,
    });
    await model_1.MyTestModel.create({
        amount: 1.99,
    });
    const items = await model_1.MyTestModel.findAll({});
    // tslint:disable-next-line: no-console
    console.log(`Count: ${items.length}`);
};
doWork().then(async () => {
    await mySQLConnection_1.default.close();
    process.exit(0);
}).catch((err) => {
    // tslint:disable-next-line: no-console
    console.error(err);
    process.exit(-1);
});
//# sourceMappingURL=index.js.map