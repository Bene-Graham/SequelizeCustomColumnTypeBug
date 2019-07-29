module.exports = function sequelizeAdditions(Sequelize) {

    DataTypes = Sequelize.DataTypes

    /*
     * Create new types
     */
    class NEWTYPE extends DataTypes.ABSTRACT {
      // Mandatory, complete definition of the new type in the database
      toSql() {
        return 'INTEGER(11) UNSIGNED ZEROFILL'
      }

      // Optional, validator function
      validate(value, options) {
        return (typeof value === 'number') && (! Number.isNaN(value))
      }

      // Optional, sanitizer
      _sanitize(value) {
        // Force all numbers to be positive
        if (value < 0) {
          value = 0
        }

        return Math.round(value)
      }

      // Optional, value stringifier before sending to database
      _stringify(value) {
        return value.toString()
      }

      // Optional, parser for values received from the database
      static parse(value) {
        return Number.parseInt(value)
      }
    }

    DataTypes.NEWTYPE = NEWTYPE;

    // Mandatory, set key
    DataTypes.NEWTYPE.prototype.key = DataTypes.NEWTYPE.key = 'NEWTYPE'

    // Optional, disable escaping after stringifier. Not recommended.
    // Warning: disables Sequelize protection against SQL injections
    // DataTypes.NEWTYPE.escape = false

    // For convenience
    // `classToInvokable` allows you to use the datatype without `new`
    Sequelize.NEWTYPE = Sequelize.Utils.classToInvokable(DataTypes.NEWTYPE)

  }