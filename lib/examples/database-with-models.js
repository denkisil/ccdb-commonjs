const {Database, SchemaTypes, Schema, Model} = require("../");// change `../` to `ccdb

const path = require("path");

const dbPath = path.join(__dirname, "../../db");

const db = new Database(dbPath);

// this object is a schema template, against which the data will be checked
const simpleSchemaTemplate = {
	name: {
		type: SchemaTypes.string,
		required: true
	},
	age: {
		type: SchemaTypes.number,
		default:18
	}
}

// creates a schema for new model. as a agrument Schema class requires a object-template, against which the data will be checked
const simpleSchema = new Schema(simpleSchemaTemplate);

// creates a model for managing data at model borders. Models - individual database files. For any model - individual file
const SimpleModel = new Model("simple", simpleSchema, db.path);

// add SimpleModel to database, then creates database file for this model
db.addModel(SimpleModel.name, SimpleModel);