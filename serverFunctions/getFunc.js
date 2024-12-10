const createPath = require("./createPathFunc");
const sendResponse = require("./sendRespons.js");
const fs = require("fs").promises;

const handleGetRoot = (req, res) => {
  fs.readFile(createPath("pages", "index.html"), "utf-8").then((data) => sendResponse(req, res, data, "text/html")
  ).catch((err) => sendResponse(req,res,err.toString(),'text/plain'))
};

const handleGetUsers = (req, res) => {
  fs.readFile(createPath("db", "users.json"), "utf-8").then((data) => sendResponse(req, res, data, "application/json")
  ).catch((err) => sendResponse(req,res,err.toString(),'text/plain'))
};

const handleGetUserId = (req, res) => {
  const id = req.url.split("/")[3];
  fs.readFile(createPath("db", "users.json"), "utf-8").then((data) => {
    const users = JSON.parse(data);
    const userId = users.find((el) => el.id === +id);
    sendResponse(req, res, JSON.stringify(userId), "application/json");
  }).catch((err) => sendResponse(req,res,err.toString(),'text/plain'))
};


const handleGetUsersName = (req, res) => {
    const index = req.url.indexOf('?') + 1
    const keyAndValue = req.url.slice(index).split('=')[1]
    fs.readFile(createPath('db', 'users.json'),'utf-8')
    .then((data) =>{
      const users = JSON.parse(data) 
      const userName = users.filter((el) => el.firstName.indexOf(keyAndValue) > -1)
       sendResponse(req,res,JSON.stringify(userName),'application/json')
    }).catch((err) => sendResponse(req,res,err.toString(),'text/plain'))
 }

module.exports = {
  handleGetRoot,
  handleGetUsers,
  handleGetUserId,
  handleGetUsers,
  handleGetUsersName
};
