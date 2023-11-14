const http = require("http");
const app = require("./server.js");

const app = http.createServer(app);

app.listen(process.env.PORT || 3000);
