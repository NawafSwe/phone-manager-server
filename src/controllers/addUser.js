const { connect } = require("../config/db.config");
const CONSTANTS = require("../utils/constants.util");
const addUser = async () => {
  try {
    const db = await connect();
    const createdUser = await db
      .collection(CONSTANTS.USER_COLLECTION)
      .insertOne({ name: "Nawaf", numbers: ["546677100"] });
    
    return createdUser;
  } catch (error) {
    console.error(`error occurred at addUser function, error: ${error}`);
  }
};


addUser();