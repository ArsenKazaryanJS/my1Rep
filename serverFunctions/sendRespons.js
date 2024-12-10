const sendResponse = (req,res,data,contentType) => {

if(contentType !== 'text/plain'){
    res.writeHead(200, {'content-type': contentType})
    res.write(data)
    res.end()
}else{
    
    res.writeHead(404, {'content-type': contentType})
    res.write(data)
    res.end()
}

 
}

module.exports = sendResponse;