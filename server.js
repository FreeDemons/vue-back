const http = require('http');
let users = [
    {id: 1101, name: 'free1'},
    {id: 1102, name: 'free2'},
    {id: 1103, name: 'free3'}
]
const server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users));
    } else {
        res.end('Not Found');
    }
    
});

server.listen(3001, () => {
    console.log('后端API接口服务器已经启动在3000端口');
});

