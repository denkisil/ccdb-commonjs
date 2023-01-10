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

const {
	RequiredOptionHasNoGotData,
	NotDataTypeDefined
} = require("./SchemaFieldErrors");

module.exports = {
	NotParameterRequiredBySchema, 
	RequiredOptionHasNoGotData,
	InvalidSchemaTepmlateType, 
	InvalidTypeOfDataToWrite,
	InvalidSchemaOptionType, 
	DataParamInvalidTypeOf,
	TypeOfParamIsntString,
	ModelNameNotDefined,
	DataIsntArrayOfData,
	NotExistsFileByPath, 
	NotDataTypeDefined,
	ModelIsInvalid,
	InvalidSchema
}