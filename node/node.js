var http = require("http");
var { readFileSync } = require("fs");

const homepage = readFileSync("./template/index.html");
const homeStyle = readFileSync("./template/styles.css");
const homeImg = readFileSync("./template/fedora.jpg");


var server = http.createServer((req, res) => {
	var url = req.url;
	console.log(" Url is ", url);
	if (req.url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(homepage);
		res.end();
	} else if (req.url === "/styles.css") {
		res.writeHead(200, { "content-type": "text/css" });
		res.write(homeStyle);
		res.end();
	} else if(req.url === "/fedora.jpg"){
		res.writeHead(200, { "content-type": "text/css" });
		res.write(homeImg);
		res.end();
	}
})


server.listen(5000);