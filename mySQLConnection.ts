import { Options, Sequelize } from "sequelize";

const opt: Options =  {
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

const sequelize = new Sequelize("testDB", "testUser", "abcd1234", opt);

export default sequelize;