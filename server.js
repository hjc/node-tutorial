var http = require("http"),
    url  = require("url");

function start () {
    function onRequest (req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log("Request for " + pathName + " received.");
        res.writeHead(200, {"Content-Type": "text/plain"});
       	res.write("Hello World!");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started. Listening on: 8888");
}

module.exports.start = start;

