const mongodb = require("mongodb");
const {userModel} = require("../models/user.model");
const {DB} = require("../utils/constants.util");

/**
 * @async
 * @function
 * @namespace connect
 * @description this function connect to mongodb and return db instance
 * @return {Promise<Db>} promise of db
 */
const connect = async () => {
    try {
        const client = await mongodb.MongoClient.connect(
            `mongodb://${DB.DB_HOST}/:${DB.DB_PORT}/${DB.DB_NAME}`,
        );
        // return db instance for phone book
        const dbInstance = client.db(DB.DB_NAME);
        // init collections if not exist
        !dbInstance.collection(DB.USER_COLLECTION)
            ? await dbInstance.createCollection(DB.USER_COLLECTION, userModel)
            : dbInstance.collection(DB.USER_COLLECTION);
        return dbInstance;
    } catch (error) {
        console.error("error occurred while connecting to db", error);
    }
};
module.exports = {connect};
