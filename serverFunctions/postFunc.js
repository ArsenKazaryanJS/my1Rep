const sendRespons = require('./sendRespons.js')
const createPath = require('./createPathFunc.js')
const fs = require('fs').promises


const handlePostNewUser = (req, res) => {
let body = [];

req.on('data',(chunk) => body.push(chunk))

req.on('end', () => {
//   body = JSON.stringify(body[0].toString())
  body = JSON.parse(Buffer.concat(body).toString());
  
  fs.readFile(createPath('db','users.json'), 'utf-8')
  .then((data) => {
    const users = JSON.parse(data)
    users.push(body)
  fs.writeFile(createPath('db','users.json'),JSON.stringify(users))  
  }).catch((err) => sendResponse(req,res,err.toString(),'text/plain'))


})
}

module.exports = handlePostNewUser;