const createModel = require("./interface/createModel");
const createSchema = require("./interface/createSchema");
const createIndex = require("./interface/createIndex");

class MONGOManager {
  /**
   * Database Create Schema
   * @function createSchema
   * @param {Object} collectionStructure
   * @returns {Promise<Number>}
   */
  static createSchema = createSchema;

  /**
   * Database Create Model
   * @function createModel
   * @param {string} collectionName
   * @param {Object} newModel
   * @param {string} collectionNameInDb
   * @returns {Promise<Object>}
   */
  static createModel = createModel;

  /**
   * Database Create Index
   * @function createIndex
   * @param {string} collectionName
   * @param {Object} index
   * @returns {Promise<Object>}
   */
  static createIndex = createIndex;
}

module.exports = MONGOManager;
