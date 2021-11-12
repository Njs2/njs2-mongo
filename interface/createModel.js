const { getConnection } = require("../helper/dbConnect");

module.exports = async function createModel(
  collectionName,
  newSchema,
  collectionNameInDb
) {
  try {
    let conn = await getConnection();
    const newModel = await conn.model(
      collectionName,
      newSchema,
      collectionNameInDb
    );
    return newModel;
  } catch (err) {
    console.log(err);
  }
};
