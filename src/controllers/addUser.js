const { connect } = require("../config/db.config");
const {DB} = require("../utils/constants.util");
const addUser = async () => {
  try {
    const db = await connect();
    const createdUser = await db
      .collection(DB.USER_COLLECTION)
      .insertOne({ name: "Nawaf", numbers: ["546677100"] });
    if (!createdUser.acknowledged) {
      console.error("could not create user");
    }
    return createdUser;
  } catch (error) {
    console.error(`error occurred at addUser function, error: ${error}`);
  }
};

module.exports = { addUser };
