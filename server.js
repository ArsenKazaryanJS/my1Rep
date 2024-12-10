const http = require("http");
const {handleGetRoot,handleGetUsers,handleGetUserId,handleGetUsersName} = require('./serverFunctions/getFunc.js')
const handlePostNewUser = require('./serverFunctions/postFunc.js')
const port = 3001;


const server = http.createServer((req,res)=>{
  switch(true){
    case req.url === '/' && req.method === 'GET':
      handleGetRoot(req,res)
    break
    case req.url === '/api/users' && req.method === 'GET':
      handleGetUsers(req,res)
    break
    case req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET':
      handleGetUserId(req,res)
    break 
    case req.url.includes('?') && req.method === 'GET':
      handleGetUsersName(req,res)
    break
    case req.url === '/api/users' && req.method === 'POST':
    handlePostNewUser(req,res)
    break
  }
})


server.listen(port, (err) => err ? console.log(err) : console.log(`Server Is Runing ${port} Port`)
);



























// if (req.url === "/" && req.method === "GET") {
//   fs.promises.readFile(createPath("pages", "index.html"), "utf-8")
//     .then((data) => {
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       res.end();
//     })
//     .catch((err) => {
//       res.writeHead(404, { "content-type": "text/plain" });
//       res.write("Server Error: " + err.message);
//       res.end();
//     });
// }

// else if (req.url === "/api/users" && req.method === "GET") {
//   fs.promises
//     .readFile(createPath("db", "users.json"), "utf-8")
//     .then((data) => {
//       res.writeHead(202, { "content-type": "application/json" });
//       res.write(data);
//       res.end();
//     })
//     .catch((err) => {
//       res.writeHead(404, { "content-type": "text/plain" });
//       res.write(err);
//       res.end();
//     });
// } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
//   const id = req.url.split("/").pop();
//   fs.promises
//     .readFile(createPath("db", "users.json"), "utf-8")
//     .then((data) => {
//       const users = JSON.parse(data);
//       const dataId = users.find((el) => el.id === +id);
//       if (dataId) {
//         res.writeHead(200, { "content-type": "application/json" });
//         res.write(JSON.stringify(dataId));
//         res.end();
//       } else {
//         res.writeHead(404, { "content-type": "text/plain" });
//         res.write(`${id} - id user not found`);
//         res.end();
//       }
//     })
//     .catch((err) => {
//       res.writeHead(404, { "content-type": "text/plain" });
//       res.write(err);
//       res.end();
//     });
// } else if (req.url.includes("?") && req.method === "GET") {
//   const index = req.url.indexOf("?") + 1;
//   const queryParams = req.url.slice(index).split("=")[1];
//   fs.promises
//     .readFile(createPath("db", "users.json"), "utf-8")
//     .then((data) => {
//       const users = JSON.parse(data);
//       const userSearch = users.filter(
//         (el) =>
//           el.firstName.toLowerCase().indexOf(queryParams.toLowerCase()) > -1
//       );
//       if (userSearch.length > 0) {
//         res.writeHead(200, { "content-type": "application/json" });
//         res.write(JSON.stringify(userSearch));
//         res.end();
//       } else {
//         res.writeHead(404, { "content-type": "text/plain" });
//         res.write(`User Name Not Found ${queryParams}`);
//         res.end();
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// } else if (req.url === "/api/users" && req.method === "POST") {
//   let body = [];

//   req.on("data", (chunk) => body.push(chunk));

//   req.on("end", () => {
//     body = JSON.parse(body[0].toString());

//     fs.promises
//       .readFile(createPath("db", "users.json"), "utf-8")
//       .then((data) => {
//         const users = JSON.parse(data);
//         users.push(body);
//         fs.promises.writeFile(
//           createPath("db", "users.json"),
//           JSON.stringify(users)
//         );
//       });
//   });
// }
