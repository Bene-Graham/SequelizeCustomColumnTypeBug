import connection from "./mySQLConnection";
//import connection from "./sqlLiteConnection";

console.log(`Dialect: ${connection.getDialect()}`);

export default connection;