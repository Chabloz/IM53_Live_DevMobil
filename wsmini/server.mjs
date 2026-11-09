import { WSServerPubSub, WSServerError } from 'wsmini';

const wsServer = new WSServerPubSub({ port: 8888 });

// Endpoints WS RPC
wsServer.addRpc('getMeteo', (clientData) => {
  // TODO: validate + sanitize clientData
  return {
    temperature: 20,
    condition: 'Sunny',
    location: clientData?.location || 'Unknown'
  };
});


wsServer.addChannel('chat', {
  hookPub: (msg, clientMetadata, wsServer) => {
    // If you want to forbid publishing, on some condition, throw an WSServerError
    if (msg.length > 100) throw new WSServerError('Message too long');
    return {
      time: Date.now(),
      user: clientMetadata.id,
      msg
    }
  }
});

setInterval(() => {
  wsServer.pub("chat", "Hello chat !  I'm a bot!");
}, 5000)



wsServer.start();