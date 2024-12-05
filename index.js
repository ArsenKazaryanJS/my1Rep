const fs = require("fs");
const path = require("path");
const http = require("http");

const createPath = (...arg) =>
  path.join(__dirname, arg.join(",").replaceAll(",", "/"));

const server = http.createServer((req, resp) => {
  if (req.url === "/" && req.method === "GET") {
    fs.promises
      .readFile(createPath("pages", "index.html"), "utf-8")
      .then((res) => {
        resp.writeHead(200, { "content-type": "text.html" });
        resp.write(res);
        resp.end();
      })
      .catch((err) => {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.write(err);
        resp.end();
      });
  } else if (req.url === "/api/users" && req.method === "GET") {
    fs.promises
      .readFile(createPath("db", "users.json"), "utf-8")
      .then((data) => {
        resp.writeHead(202, { "content-type": "application/json" });
        resp.write(data);
        resp.end();
      })
      .catch((err) => {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.write(err);
        resp.end();
      });
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/").pop()  //pop
    fs.promises
      .readFile(createPath("db", "users.json"), "utf-8")
      .then((data) => {
        const users = JSON.parse(data)
        const dataId = users.find((el) => el.id == id);
        if(dataId){
            resp.writeHead(200, { "content-type": "application/json" });
            resp.write(JSON.stringify(dataId));
            resp.end();
        }else{
            return
        }
      
      }).catch((err) => {
        resp.writeHead(404, { "content-type": "text/plain" });
        resp.write(err);
        resp.end();
      });
  } else {
    resp.writeHead(404, { "content-type": "text/plain" });
    resp.write("Not found");
  }
});

server.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Is Runing");
  }
});
