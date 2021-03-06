import { Options, Sequelize } from "sequelize";
import BigJsCol from "./BigJsColumn";
// tslint:disable-next-line: no-var-requires
const sequelizeAdditions = require("./sequelize-additions");

const opt: Options =  {
    dialect: "sqlite"
};

opt.dialectOptions = {
    decimalNumbers: true
};

opt.logging = (txt) => {
    // tslint:disable-next-line:no-console
    console.log("\x1b[36m%s\x1b[0m", txt);
};
sequelizeAdditions(Sequelize);
BigJsCol(Sequelize);

const sequelize = new Sequelize("sqlite::memory:", opt);

export default sequelize;