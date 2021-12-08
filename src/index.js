const http = require("http");
const {SERVER, ROUTES, HTTP_STATUS} = require('./utils/constants.util');
const {findAllUsers, addUser, getUserById, deleteUserById} = require("./controllers/index");


const requestListener = async (req, res) => {
    if (req.url === ROUTES.USERS && req.method.toUpperCase() === SERVER.METHODS.POST) {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', async () => {
            const createUserResponse = await addUser(JSON.parse(data));
            const isCreated = createUserResponse?.acknowledged;
            res.setHeader("Content-Type", "application/json");
            res.writeHead(isCreated ? HTTP_STATUS.CREATED.code : HTTP_STATUS.BAD_REQUEST.code);
            const body = isCreated ? {createdUser: createUserResponse} : {message: createUserResponse};
            res.write(JSON.stringify(body, null, 4));
            res.end();
        });

    } else if (req.url === ROUTES.USERS && req.method.toUpperCase() === SERVER.METHODS.GET) {
        const users = await findAllUsers();
        res.setHeader("Content-Type", "application/json");
        res.writeHead(HTTP_STATUS.OK.code);
        res.write(JSON.stringify({users: users}, null, 4));
        res.end();
    } else if (req.method === SERVER.METHODS.GET && req.url.split('/')[1] === ROUTES.USERS.slice(1) && req.url.split('/')[2].length > 0) {
        const id = req.url.split('/')[2];
        const user = await getUserById(id);
        const isFound = user?._id;
        res.setHeader("Content-Type", "application/json");
        res.writeHead(isFound ? HTTP_STATUS.OK.code : HTTP_STATUS.NOT_FOUND.code);
        const body = isFound ? {user: user} : {message: 'User Not Found'};
        res.write(JSON.stringify(body, null, 4));
        res.end();
    } else if (req.method === SERVER.METHODS.DELETE && req.url.split('/')[1] === ROUTES.USERS.slice(1) && req.url.split('/')[2].length > 0) {
        const id = req.url.split('/')[2];
        const deleteUserResponse = await deleteUserById(id);
        const isDeleted = deleteUserResponse?.acknowledged;
        res.setHeader("Content-Type", "application/json");
        res.writeHead(isDeleted ? HTTP_STATUS.OK.code : HTTP_STATUS.NOT_FOUND.code);
        const body = isDeleted ? {deleteResult: deleteUserResponse} : {message: deleteUserResponse};
        res.write(JSON.stringify(body, null, 4));
        res.end();

    } else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(HTTP_STATUS.NOT_FOUND.code);
        res.write(JSON.stringify({message: "Endpoint not found"}, null, 4));
        res.end();
    }

};

const server = http.createServer(requestListener);
server.listen(SERVER.PORT, null, () => {
    const address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> that probably means: http://localhost:%d', address.port);
});
