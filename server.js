const http = require('http');
let users = [
    {id: 2101, name: 'free1'},
    {id: 2102, name: 'free2'},
    {id: 2103, name: 'zary'}
]
const server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users));
    } else {
        res.end('Not Found');
    }
    
});

server.listen(3000, () => {
    console.log('后端API接口服务器已经启动在3000端口');
});

