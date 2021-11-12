const { getConnection } = require("../helper/dbConnect");

module.exports = async function createSchema(collectionStructure) {
  try {
    let conn = await getConnection();
    return await conn.Schema(collectionStructure);
  } catch (error) {
    console.log(error);
  }
};
