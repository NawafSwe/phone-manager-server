import mongodb from 'mongodb';
const connect = ()=> mongodb.MongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);