const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");
const mongo = require("mongodb");
const getUserById = async (id) => {
    try {
        const db = await connect();
        const foundUser = await db.collection(DB.USER_COLLECTION).findOne({
            _id: new mongo.ObjectId(id),
        });
        console.log(foundUser);
        return foundUser;
    } catch (error) {
        console.error(`error occurred at getUserById function, error: ${error}`);
    }
};

module.exports = {getUserById};
