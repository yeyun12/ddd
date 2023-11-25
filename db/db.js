const fs = require("fs");
const json = fs.readFileSync("./db/option.json", "utf8");
const options = JSON.parse(json);
const mysql2 = require("mysql2/promise");
const pool = mysql2.createPool({
    host: options.host,
    prot: options.port,
    user: options.user,
    password: options.password,
    database: options.database,
    dateStrings: true,
});
module.exports = pool;