async function handlePing(client, chatId) {
  client.sendMessage(chatId, { text: 'Pong!' });
}
module.exports = handlePing;
