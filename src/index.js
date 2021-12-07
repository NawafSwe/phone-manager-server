const http = require("http");
const HOST = "localhost";
const PORT = 8000;
const {findAllUsers} = require("./controllers/findAllUsers");
const requestListener = async (req, res) => {
    console.log(req.url);
    if (req.url === '/users') {
        res.setHeader("Content-Type", "application/json");

        const users = await findAllUsers();
        if (users?.length >= 0) {
            res.writeHead(200);
            res.write(JSON.stringify({users: users}, null, 4));
            res.end();
        } else {
            res.writeHead(400);
            res.write(JSON.stringify({message: 'Server could not handle your request'}, null, 4));
            res.end();
        }

    }
};

const server = http.createServer(requestListener);
server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT} 🚀`);
});
