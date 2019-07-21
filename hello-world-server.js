var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
	
	if(req.method==="GET" && req.url.indexOf("Example")!=-1){
	//res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("./"+req.url, function(err, data) {
    if(err)
    	throw err;
    	
    var dotoffset = req.url.lastIndexOf('.');
    var mimetype = dotoffset == -1
                    ? 'text/plain'
                    : {
                        '.html' : 'text/html',
                        '.ico' : 'image/x-icon',
                        '.jpg' : 'image/jpeg',
                        '.png' : 'image/png',
                        '.gif' : 'image/gif',
                        '.css' : 'text/css',
                        '.js' : 'text/javascript'
                        }[ req.url.substr(dotoffset) ];
    res.setHeader('Content-type' , mimetype);

    res.end(data);
    
	});
    
	}
	
}).listen(1330, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
