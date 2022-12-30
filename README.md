# **C**onstru**c**table DB

Simple data storage based on JSON format.

### This is CommonJS package. if you want to use version for ESMAScript, so [welcome](https://github.com/denkisil/ccdb)

# Install
```
npm i ccdb-commonjs
```

Example of work with CCDB:
```js 
const {SchemaTypes, Schema, Model, Database} = require("ccdb");

const path = require("path")

const db = new Database(path.join(__dirname, "db"));

const userModelTemp = {
	id: SchemaTypes.number,
	name: SchemaTypes.string
}

const userSchema = new Schema(userModelTemp);

const Users = new Model("users", db.path, userSchema);

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

const deleted = Users.deleteDocsByParam("id", 1);

const usersAll = Users.read();

console.log(users);

```