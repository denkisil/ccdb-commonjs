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

module.exports = {
	NotParameterRequiredBySchema, 
	InvalidSchemaTepmlateType, 
	InvalidTypeOfDataToWrite,
	InvalidSchemaOptionType, 
	DataParamInvalidTypeOf,
	TypeOfParamIsntString,
	ModelNameNotDefined,
	DataIsntArrayOfData,
	ModelIsInvalid,
	InvalidSchema
}