const {Database} = require("../"); // change `../` to `ccdb

const path = require("path");

const dbPath = path.join(__dirname, "../../db");

const db = new Database(dbPath);