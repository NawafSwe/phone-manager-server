const { connect } = require("../config/db.config");
const {DB} = require("../utils/constants.util");

const findAllUsers = async () => {
  try {
    const db = await connect();
    const users = await db
      .collection(DB.USER_COLLECTION)
      .find({})
      .toArray();
    console.log(users);
    return users;
  } catch (error) {
    console.error(`error occurred at findAllUsers function, error: ${error}`);
  }
};

module.exports = { findAllUsers };
