const { 
	StringLengthShortenThanSchemaLength,
	DataValueShortenThanSchemaMinValue,
	StringLengthBigestThanSchemaLength,
	DataValueBigestThanSchemaMaxValue,
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
	MaxLengthShortenThanMinLength,
	MinValueBigestThanMaxValue,
	RequiredOptionHasNoGotData,
	MaxLengthEqualsMinLength,
	MinLengthShortenThanZero,
	MinValueEqualsMaxValue,
	NotDataTypeDefined
} = require("./SchemaFieldErrors");

module.exports = {
	StringLengthShortenThanSchemaLength,
	StringLengthBigestThanSchemaLength,
	DataValueShortenThanSchemaMinValue,
	DataValueBigestThanSchemaMaxValue,
	MaxLengthShortenThanMinLength,
	NotParameterRequiredBySchema, 
	RequiredOptionHasNoGotData,
	MinValueBigestThanMaxValue,
	InvalidSchemaTepmlateType, 
	MinLengthShortenThanZero,
	InvalidTypeOfDataToWrite,
	MaxLengthEqualsMinLength,
	InvalidSchemaOptionType, 
	DataParamInvalidTypeOf,
	MinValueEqualsMaxValue,
	TypeOfParamIsntString,
	ModelNameNotDefined,
	DataIsntArrayOfData,
	NotExistsFileByPath, 
	NotDataTypeDefined,
	ModelIsInvalid,
	InvalidSchema
}