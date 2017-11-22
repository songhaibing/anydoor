var net=require("net");
var server=net.creaServer(function (socket) {
    server.close(function () {
        console.log("tcp服务器被关闭");

    });

});

server.listen(8431,"localhost");