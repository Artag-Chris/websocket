
import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('se conecto alguien');
  ws.on('error', console.error);

  ws.on('message', function message(data) {

    //console.log('received: %s', data);
    const payload = JSON.stringify({
      type: "custom-message",
      payload: data.toString()
    });

   // ws.send(JSON.stringify(payload));
   wss.clients.forEach( function each(client){
    //para mostarle a todos incluido
    // if(client.readyState === WebSocket.OPEN){
    //   client.send(payload,{binary:false});
    // }

    //para mostrarle a todos excluido
    if(client !== ws && client.readyState === WebSocket.OPEN){
      client.send(payload,{binary:false});
    }

   })
  });

  ws.on('close', function close() {
    console.log('se desconecto alguien');
  });

 // ws.send('hola desde web sockets');

  // setInterval(() => {
  //   ws.send('hola cada 2 segundos');
  // },2000)
});
 console.log('servidor iniciado localhost:3000');