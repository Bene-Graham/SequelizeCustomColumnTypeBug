import { Op } from "sequelize";
import { MyTestModel } from "./model";
import connection from "./mySQLConnection";

const doWork = async () => {
    await connection.sync();

    await MyTestModel.destroy({
        where: {
            id: {
                [Op.gt]: 0
            }
        }
    });

    await MyTestModel.create({
        amount: 99.76,
    });

    await MyTestModel.create({
        amount: 10,
    });

    await MyTestModel.create({
        amount: 1.99,
    });

    const items = await MyTestModel.findAll({
    });

    // tslint:disable-next-line: no-console
    console.log(`Count: ${items.length}`);
};

doWork().then(async () => {
    await connection.close();
    process.exit(0);
}).catch((err) => {
    // tslint:disable-next-line: no-console
    console.error(err);
    process.exit(-1);
});