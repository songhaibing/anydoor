
var net=require("net");
var server=net.creatServer(function (scoket) {
    console.log("客服端与服务器端连接已建立");

});
server.listen(8431,"localhost",function () {
    console.log("服务端开始监听");

});