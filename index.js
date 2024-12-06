const fs = require("fs");
const path = require("path");
const http = require("http");
const port = 5000;

const createPath = (...arg) =>
  
  path.join(__dirname, arg.join(",").replaceAll(",", "/"));

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fs.promises
      .readFile(createPath("pages", "index.html"), "utf-8")
      .then((res) => {
        res.writeHead(200, { "content-type": "text.html" });
        res.pwrite(res);
        res.end();
      })
      .catch((err) => {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write(err);
        res.end();
      });
  } else if (req.url === "/api/users" && req.method === "GET") {
    fs.promises
      .readFile(createPath("db", "users.json"), "utf-8")
      .then((data) => {
        res.writeHead(202, { "content-type": "application/json" });
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write(err);
        res.end();
      });
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/").pop();
    fs.promises
      .readFile(createPath("db", "users.json"), "utf-8")
      .then((data) => {
        const users = JSON.parse(data);
        const dataId = users.find((el) => el.id === +id);
        if (dataId) {
          res.writeHead(200, { "content-type": "application/json" });
          res.write(JSON.stringify(dataId));
          res.end();
        } else {
          res.writeHead(404, { "content-type": "text/plain" });
          res.write(`${id} - id user not found`);
          res.end();
        }
      })
      .catch((err) => {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write(err);
        res.end();
      });
  } else if (req.url.includes("?") && req.method === "GET") {
    const index = req.url.indexOf("?") + 1;
    const queryParams = req.url.slice(index).split("=")[1];
    fs.promises
      .readFile(createPath("db", "users.json"), "utf-8")
      .then((data) => {
        const users = JSON.parse(data);
        const userSearch = users.filter((el) => el.firstName.indexOf(queryParams) > -1);
        if (userSearch) {
          res.writeHead(204, { "content-type": "application/json" });
          res.write(JSON.stringify(userSearch));
          res.end();
        }else{
          res.writeHead(404, { "content-type": "text/plain" });
          res.write(`User Name Not Found ${queryParams}`);
          res.end();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Is Runing");
  }
});
