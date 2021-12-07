const http = require("http");
const {SERVER} = require('./utils/constants.util');
const {findAllUsers, addUser} = require("./controllers/index");


const requestListener = async (req, res) => {
    switch (req) {
        case (req.url.slice(1) === 'users' && req.method === SERVER.METHODS.POST):
            const createUserResponse = await addUser(req.body);
            res.setHeader("Content-Type", "application/json");
            res.writeHead(201);
            res.write(JSON.stringify({createdUser: createUserResponse}, null, 4));
            return res.end();

        case (req.url.slice(1) === 'users' && req.method === SERVER.METHODS.GET):
            const users = await findAllUsers();
            res.setHeader("Content-Type", "application/json");
            res.writeHead(201);
            res.write(JSON.stringify({users: users}, null, 4));
            return res.end();

        default:
            res.setHeader("Content-Type", "application/json");
            res.writeHead(404);
            res.write(JSON.stringify({message: "Endpoint not found"}, null, 4));
            return res.end();
    }
};

const server = http.createServer(requestListener);
server.listen(SERVER.PORT, SERVER.HOST, () => {
    console.log(`Server is running on ${SERVER.HOST}:${SERVER.PORT} 🚀`);
});
