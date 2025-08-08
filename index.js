const { useSingleFileAuthState, default: makeWASocket } = require('@adiwajshing/baileys');
const qrcode = require('qrcode-terminal');

// Use authentication state stored in a file
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function connectToWhatsApp() {
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    // Save auth state when updated
    sock.ev.on('creds.update', saveState);

    // Listen for messages
    sock.ev.on('messages.upsert', ({ messages }) => {
        const message = messages[0];
        if (!message.key.fromMe && message.message) {
            console.log('Received message:', message.message);
            sock.sendMessage(message.key.remoteJid, { text: 'Hello, this is your bot!' });
        }
    });
}

connectToWhatsApp()
