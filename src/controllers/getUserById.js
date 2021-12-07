const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");
const mongo = require("mongodb");

/**
 * @async
 * @function
 * @namespace getUserById
 * @param id
 * @return {Promise<WithId<Document> | null>}
 * @description getting user by his id
 */
const getUserById = async (id) => {
    try {
        const db = await connect();
        return db.collection(DB.USER_COLLECTION).findOne({
            _id: new mongo.ObjectId(id),
        });

    } catch (error) {
        console.error(`error occurred at getUserById function, error: ${error}`);
    }
};

module.exports = {getUserById};
