const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");
const mongo = require('mongodb');

/**
 * @async
 * @function
 * @namespace deleteUserById
 * @param id
 * @return { Promise<DeleteResult> | string}
 * @description delete user by id
 */
const deleteUserById = async (id) => {
    try {
        if (!id) {
            return "id should be given";
        }

        const db = await connect();
        return db
            .collection(DB.USER_COLLECTION)
            .deleteOne({_id: new mongo.ObjectId(id)});

    } catch (error) {
        console.error(`error occurred at deleteUserById function, error: ${error}`);
        return 'user was not found make sure id is correct';
    }
};

module.exports = {deleteUserById};
