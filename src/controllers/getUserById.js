const { connect } = require("../config/db.config");
const CONSTANTS = require("../utils/constants.util");
const mongo = require("mongodb");
const getUserById = async () => {
  try {
    const db = await connect();
    const foundUser = await db.collection(CONSTANTS.USER_COLLECTION).findOne({
      _id: new mongo.ObjectId("61afb20ac8c6e867a0c7fd9b"),
    });
    console.log(foundUser);
  } catch (error) {
    console.error(`error occurred at getUserById function, error: ${error}`);
  }
};

getUserById();
