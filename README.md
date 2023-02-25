# **C**onstru**c**table DB

![npm](https://img.shields.io/npm/dt/ccdb-commonjs)
![npm](https://img.shields.io/npm/v/ccdb-commonjs)

![image](static/ccdb_logo_minified.png)

Simple data storage based on JSON format.

### This is CommonJS package. if you want to use version for ESMAScript, so [welcome](https://github.com/denkisil/ccdb)

## Content
- [Install](#install)
- [Quick Start](#quick-start-to-ccdb)
- [Examples](#examples)
- [API reference](#api-reference)
  - [Database](#database)
  - [Model](#model)
  - [Schema](#schema)
  - [SchemaField](#schemafield)
  - [FS](#fs)

# Install
```
npm i ccdb-commonjs
```

# Quick start to ccdb
```js 
const {SchemaTypes, Schema, Model, Database} = require("ccdb-commonjs");

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

```

# Examples

You can see in folder `lib/examples`

# API reference

## Database

### `new Database(/*path where db will be placed*/)` - main class of database

### Parameters
- `Database.fs` - instance of FS (FileSystem) class

- `Database.path` - path where database placed

- `Database.models` - object, which contains all added models

#### Methods
- `Database.addModel(/*name of model*/, /*instance of Model's class*/)` - adds a new model to database and creates a file of model

## Model

## `new Model(/*name of model*/, /*model's schema*/, /*path, where database placed*/)` - class for making models.

### Parameters
- `Model.fs` - instance of FS class

- `Model.name` - name of model

- `Model.path` - path where placed database

- `Model.schema` - instance of Schema

- `Model.fullPath` - path where placed database file

### Methods

- `Model.read()` - reads all database file content, includes name and schema of database

- `Model.writeOne(/*object to write*/)` - write one exemplar of data to database

- `Model.writeMany(/*array of objects to write*/)` - write a array of data to database

- `Model.getDocByParams(/*object of parameters*/)` - get document from database by object of parameters

- `Model.updateDocByParams(/*object of parameters*/, /*object to get*/)` - update document in database, which goted by few parameters

- `Model.deleteDocByParams(/*object of parameters*/)` - delete doc/docs by special parameter

## Schema

## `new Schema(/*template of schema*/)` - class which makes schemas for models

### Parameters

- `SchemaField.type` - value type for validating data; required option

- `SchemaField.required` - value requires to insert or not; in default `false`
 
- `SchemaField.defaultValue` - vvalue will insert when no have value to insert; in default `null`

- `SchemaField.maxStringLength` - string value length don't be more that specified; default `2**53-1`

- `SchemaField.minStringLength` -  string value length don't be less that specified; default `0`

- `SchemaField.maxNumValue` - number value don't be more that specified; default `2**53-1`

- `SchemaField.minNumValue` - number value don't be less that specified; default `-(2**53-1)`

- `SchemaField.unique` - one value for one field if true; default `false`

## FS

## `new FS()/*(FileSystem)*/` - class for direct control on the database files

### Parameters

- `FS.dbPath` - path where database placed

### Methods

- `FS.createDatabaseFolder(/*path to database folder*/)` - makes a folder, where will be placed db

- `FS.readDatabaseFile(/*path to database file*/)` - reads all database file

- `FS.writeDataToDatabase(/*path to database file*/, /*object to write*/)` - writes data to database file

- `FS.addDatabaseFile(/*name of database file*/, /*schema of database file*/)` - adds new database file

- `FS.clearDatabaseData(/*path to database file*/)` - clears all data in database file

