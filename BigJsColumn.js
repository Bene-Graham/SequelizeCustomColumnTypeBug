"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_js_1 = require("big.js");
function sequelizeAdditions(Sequelize) {
    const DataTypes = Sequelize.DataTypes;
    /*
     * Create new types
     */
    class BIGJS extends DataTypes.DECIMAL {
        static parse(value) {
            return new big_js_1.default(value);
        }
        constructor(precision, scale) {
            super();
            this._precision = precision;
            this._scale = scale;
        }
        toSql() {
            if (this._precision || this._scale) {
                return `DECIMAL(${[this._precision, this._scale].filter(this.identity).join(",")})`;
            }
            return "DECIMAL";
        }
        // Optional, validator function
        validate(value, options) {
            if (value instanceof big_js_1.default) {
                return true;
            }
            else {
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
exports.default = sequelizeAdditions;
//# sourceMappingURL=BigJsColumn.js.map