module.exports = {
    DB: {
        USER_COLLECTION: "usersModel",
        DB_NAME: "PhoneManager",
        DB_HOST: 'localhost',// in case you are using docker replace it with the container name
        DB_PORT: 27017,
    },
    SERVER: {
        PORT: 6060,
        HOST: 'localhost',
        METHODS: {
            GET: 'GET',
            POST: 'POST',
            PUT: 'PUT',
            DELETE: 'DELETE',
        },
    },


};
