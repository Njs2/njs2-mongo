let conn = null;

const getConnection = () => {
  if (!conn) {
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    const {
      MONGO_DB_HOST,
      MONGO_DB_PORT,
      MONGO_DB_NAME,
      MONGO_DB_USER,
      MONGO_DB_PASSWORD,
    } = JSON.parse(process.env.MONGO);
    if (mongoose.connection._readyState != 1) {
      const uri = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;
      if (MONGO_DB_USER === "" && MONGO_DB_PASSWORD === "") {
        mongoose.connect(uri, {
          useNewUrlParser: true,
        });
      } else {
        mongoose.connect(uri, {
          useNewUrlParser: true,
          auth: {
            authdb: "admin",
          },
          authSource: "admin",
          user: `${MONGO_DB_USER}`,
          pass: `${MONGO_DB_PASSWORD}`,
        });
      }
    }

    conn = mongoose;
  }

  return conn;
};

module.exports.getConnection = getConnection;
