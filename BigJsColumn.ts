import Big from "big.js";

export default function sequelizeAdditions(Sequelize: any) {

    const DataTypes = Sequelize.DataTypes;

    /*
     * Create new types
     */
    class BIGJS extends DataTypes.DECIMAL {
        public static parse(value: any) {
            return new Big(value);
        }

        private _precision: number;
        private _scale: number;

        constructor(precision: number, scale: number) {
            super();

            this._precision = precision;
            this._scale = scale;
        }

        public toSql() {
            if (this._precision || this._scale) {
                return `DECIMAL(${[this._precision, this._scale].filter(this.identity).join(",")})`;
            }

            return "DECIMAL";
        }

        // Optional, validator function
        public validate(value: any, options: any) {
            if (value instanceof Big) {
                return true;
            } else {
                return false;
            }
        }
    }

    DataTypes.BIGJS = BIGJS;

    // Mandatory, set key
    DataTypes.BIGJS.prototype.key = DataTypes.BIGJS.key = "BIGJS";

    // For convenience
    // `classToInvokable` allows you to use the datatype without `new`
    Sequelize.BIGJS = Sequelize.Utils.classToInvokable(DataTypes.BIGJS);
}