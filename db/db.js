const mysql = require("mysql");
const util = require("util");
//account number:
// 385421924
//1/10/2016


var connection = mysql.createConnection({
    host: "localhost",
    port: 2551,
    user: "root",
    password: "root",
    database: "emplMang"
});

function makeDb() {
    // console.log("here");
    return {
        query(sql, args) {
            return util.promisify(connection.query)
                .call(connection, sql, args);
        },
        close() {
            console.log("closing");
            return util.promisify(connection.end).call(connection);
        }
    };
};

module.exports = makeDb();