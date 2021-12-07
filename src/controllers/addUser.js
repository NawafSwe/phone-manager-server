const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");

/**
 * @async
 * @function
 * @namespace addUser
 * @param body
 * @return {Promise<InsertOneResult<Document>> | String}
 * @description add new user
 */
const addUser = async (body) => {
    try {
        console.log(typeof body.name);
        if (!body?.name) {
            return "Name Should be exist on the body";
        }
        if (typeof body?.name !== 'string') {
            return "Name should be of type string";
        }
        const db = await connect();
        const createdUser = await db
            .collection(DB.USER_COLLECTION)
            .insertOne({name: body.name, numbers: body.numbers});
        if (!createdUser.acknowledged) {
            console.error("could not create user");
        }
        return createdUser;
    } catch (error) {
        console.error(`error occurred at addUser function, error: ${error}`);
    }
};

module.exports = {addUser};
