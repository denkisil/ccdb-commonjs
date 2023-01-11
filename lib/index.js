const {Schema, SchemaTypes} = require("./Schema");
const Database = require("./Database");
const Model = require("./Model");

const path = require("path");

const db = new Database(path.join(__dirname, "db"));

const userModelTemp = {
	id: { 
		type: SchemaTypes.number,
		required: true
	},
	name: { 
		type: SchemaTypes.string,
		required: true
	}
}

const userSchema = new Schema(userModelTemp);

const Users = new Model("users", userSchema, db.path);

console.log(Users);

db.addModel(Users.name, Users);

const users = [
	{
		id: 1,
		name: "Joe"
	},
	{
		id: 2,
		name: "Steve"
	}
]

const writed = Users.writeMany(users);

const deleted = Users.deleteDocByParams({id: 1});

const usersAll = Users.read();

console.log(users);

module.exports = {
	SchemaTypes,
	Database,
	Schema,
	Model
}