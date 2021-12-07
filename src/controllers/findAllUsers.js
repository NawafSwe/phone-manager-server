const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");
/**
 * @async
 * @function
 * @namespace findAllUsers
 * @return {Promise<WithId<Document>[]>}
 * @description returning all users with thier numbers from db
 */
const findAllUsers = async () => {
    try {
        const db = await connect();
        return db
            .collection(DB.USER_COLLECTION)
            .find({})
            .toArray();


    } catch (error) {
        console.error(`error occurred at findAllUsers function, error: ${error}`);
    }
};

module.exports = {findAllUsers};
