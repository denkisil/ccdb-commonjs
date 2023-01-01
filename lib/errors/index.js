const { 
	NotParameterRequiredBySchema,
	InvalidSchemaTepmlateType,
	InvalidSchemaOptionType, 
	DataParamInvalidTypeOf, 
	InvalidSchema
} = require("./SchemaErrors");

const {
	InvalidTypeOfDataToWrite,
	TypeOfParamIsntString,
	ModelNameNotDefined,
	DataIsntArrayOfData,
	ModelIsInvalid,
} = require("./ModelErrors");

const {
	NotExistsFileByPath
} = require("./FSErrors");

module.exports = {
	NotParameterRequiredBySchema, 
	InvalidSchemaTepmlateType, 
	InvalidTypeOfDataToWrite,
	InvalidSchemaOptionType, 
	DataParamInvalidTypeOf,
	TypeOfParamIsntString,
	ModelNameNotDefined,
	DataIsntArrayOfData,
	NotExistsFileByPath, 
	ModelIsInvalid,
	InvalidSchema
}