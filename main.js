const { Client } = require('@baileys/whatsapp-web.js');
const settings = require('./settings');
const client = new Client();
client.initialize();
const { Client } = require('@baileys/whatsapp-web.js');
const settings = require('./settings');
const client = new Client();
client.on('qr', (qr) => {
  console.log('QR RECEIVED', qr);
});
client.on('ready', () => {
  console.log('BOT IS READY!');
});
client.on('message', (message) => {
  console.log('MESSAGE RECEIVED', message);
  // Command handler will go here
});
client.initialize();

// commands handler 


const commandHandler = require('./lib/commandHandler');
client.on('message', async (message) => {
  if (message.body.startsWith('.')) {
    await commandHandler(client, message);
  }
});
