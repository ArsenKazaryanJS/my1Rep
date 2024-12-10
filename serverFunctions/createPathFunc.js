const path = require("path");

function createPath(...arg){
 let pathRemove = '\serverFunctions'
 let newPath = __dirname.replace(pathRemove,'')
return path.join(newPath, arg.join(",").replaceAll(",", "/"));
};



module.exports = createPath;
