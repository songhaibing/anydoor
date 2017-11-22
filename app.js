var net=require("net");
var server = net.createServer();
server.on('connection',function (soket) {
    address=socket.address();
    console.log('socket 端口为%j',address)

});
server.listen(8431,"localhost");