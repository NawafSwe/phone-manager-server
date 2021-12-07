const http = require("http");
const {SERVER} = require('./utils/constants.util');
const {findAllUsers, addUser,getUserById} = require("./controllers/index");


const requestListener = async (req, res) => {

    if (req.url === '/users' && req.method.toUpperCase() === SERVER.METHODS.POST) {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            data = JSON.parse(data);
            console.log(data);
        });
        const createUserResponse = await addUser(data);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(201);
        res.write(JSON.stringify({createdUser: createUserResponse}, null, 4));
        res.end();

    } else if (req.url === '/users' && req.method.toUpperCase() === SERVER.METHODS.GET) {
        const users = await findAllUsers();
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify({users: users}, null, 4));
        res.end();
    }else if(req.url.split('/')[2].length > 0 && SERVER.METHODS.GET && req.url === '/users'){
        const id = req.url.split('/')[2];
        const users = await getUserById(id);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(JSON.stringify({users: users}, null, 4));
        res.end();
    }
     else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(404);
        res.write(JSON.stringify({message: "Endpoint not found"}, null, 4));
        res.end();
    }

};

const server = http.createServer(requestListener);
server.listen(SERVER.PORT, SERVER.HOST, () => {
    console.log(`Server is running on ${SERVER.HOST}:${SERVER.PORT} 🚀`);
});
