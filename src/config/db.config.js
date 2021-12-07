const mongodb = require("mongodb");
const { userModel } = require("../models/user.model");
const CONSTANTS = require("../utils/constants.util");
const connect = async () => {
  try {
    const client = await mongodb.MongoClient.connect(
      `mongodb://localhost/:27017/${CONSTANTS.DB_NAME}`
    );
    // return db instance for phone book
    const dbInstance = client.db(CONSTANTS.DB_NAME);
    // init collections if not exist
    !dbInstance.collection(CONSTANTS.USER_COLLECTION)
      ? dbInstance.createCollection(CONSTANTS.USER_COLLECTION, userModel)
      : dbInstance.collection(CONSTANTS.USER_COLLECTION);
    return dbInstance;
  } catch (error) {
    console.error("error occurred while connecting to db", error);
  }
};
module.exports = { connect };
