const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");
const mongo = require("mongodb");

/**
 * @async
 * @function
 * @namespace getUserById
 * @param id
 * @return {Promise<WithId<Document> | String>}
 * @description getting user by his id
 */
const getUserById = async (id) => {
    try {
        if (!id) {
            return "id should be given";
        }
        const db = await connect();
        return db.collection(DB.USER_COLLECTION).findOne({
            _id: new mongo.ObjectId(id),
        });

    } catch (error) {
        console.error(`error occurred at getUserById function, error: ${error}`);
        return 'user was not found make sure id is correct';
    }
};

module.exports = {getUserById};
