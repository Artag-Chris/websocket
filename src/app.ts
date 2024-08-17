
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
    console.log('se conecto alguien');
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('hola desde web sockets');

  setInterval(() => {
    ws.send('hola cada 2 segundos');
  },2000)
});
 console.log('servidor iniciado localhost:3000');