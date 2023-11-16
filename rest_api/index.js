const http = require("http");
const app = require("./server.js");

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
