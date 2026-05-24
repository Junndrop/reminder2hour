require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Bot aktif ✅');
});

cron.schedule('0 8 * * *', () => {
  bot.sendMessage(process.env.CHAT_ID, 'Selamat pagi ☀️');
}, {
  timezone: 'Asia/Jakarta'
});

console.log('Bot berjalan...');
