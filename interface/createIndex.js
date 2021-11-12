module.exports = async function createIndex(
  schemaObject,
  indexAttribute,
  indexName
) {
  try {
    schemaObject.index(indexAttribute, {
      name: indexName,
      unique: true,
      sparse: true,
    });
  } catch (err) {
    console.log(err);
  }
};
