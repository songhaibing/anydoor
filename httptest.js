var http=require("http");
var server=http.createServer(function (req,res) {
    
}).listen(1337,"127.0.01");
server.on("connectiong",function (socket) {
    console.log("客户端链接已建立。");

});