import { WSClient } from 'wsmini';

const ws = new WSClient('ws://localhost:8888');

await ws.connect().catch(err => {
  console.error('Cannot connect to server. Try again later.');
  throw err;
});
console.log('Connection established!');

await ws.sub('chat', (message) => {
  console.log(message);
});


setInterval(() => {
  ws.pub("chat", "Hello chat !  I'm a client BOT!");
}, 5000)

const meteo = await ws.rpc('getMeteo', { location: 'London' });

console.log(`Weather in ${meteo.location}: ${meteo.temperature}°C, ${meteo.condition}`);