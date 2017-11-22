var net=require("net");
var server=net.createServer(function (socket) {
    server.getConnectiongs(function (err,count) {
        console.log("当前存在%d个客服端链接",count);
        server.maxConnectiongs=2;
        console.log("tcp服务器的最大连接数为%d",server.maxConnectiongs);

    });


});
server.listen(8431,"localhost");
console.log("tcp服务器被创建");