import { Op } from "sequelize";
import { MyTestModel } from "./model";
import connection from "./mySQLConnection";

const doWork = async () => {
    //await connection.sync();

    await MyTestModel.destroy({
        where: {
            id: {
                [Op.gt]: 0
            }
        }
    });

    await MyTestModel.create({
        amount: 99.76,
        myInt: 1
    });

    await MyTestModel.create({
        amount: 10,
        myInt: 2
    });

    await MyTestModel.create({
        amount: 1.99,
        myInt: 3
    });

    const items = await MyTestModel.findAll({
    });

    for(const item of items) {
        console.log(item.myInt);
        console.log(`ID: ${item.id} -- ${typeof item.amount}`);
    }
};

doWork().then(async () => {
    await connection.close();
    process.exit(0);
}).catch((err) => {
    // tslint:disable-next-line: no-console
    console.error(err);
    process.exit(-1);
});