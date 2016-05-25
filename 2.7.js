var net = require('net');
var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection',function(client){
  client.name = client.remoteAddress + ':' + client.remotePort
  client.write('Hi,'+client.name + '!\n' );
  clientList.push(client);
  client.on('data',function(data){
    broadcast(data,client);
  })
})

function broadcast(msg,client){
  for(var i in clientList){
    if(client !== clientList[i]){
      clientList[i].write(client.name + ' says ' + msg)
    }
  }
}

chatServer.listen(9000)
