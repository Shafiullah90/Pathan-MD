async function handleCommand(client, message) {
  const command = message.body.slice(1).trim().split(' ')[0].toLowerCase();
  const args = message.body.slice(command.length + 2).trim().split(' ');
  const chatId = message.from;
  switch (command) {
    // Commands will be added here
    default:
      client.sendMessage(chatId, { text: 'Unknown command!' });
  }
}
switch (command) {
  case 'ping':
    const pingCommand = require('../commands/ping');
    await pingCommand.handlePing(client, chatId);
    break;
  default:
    client.sendMessage(chatId,

module.exports = handleCommand;
