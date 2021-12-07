const {connect} = require("../config/db.config");
const {DB} = require("../utils/constants.util");

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
