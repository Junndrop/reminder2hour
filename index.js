require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: {
    interval: 300,
    autoStart: true
  }
});
bot.deleteWebHook();

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Bot aktif ✅');
});

cron.schedule('* * * * *', () => {
  bot.sendMessage(process.env.CHAT_ID, 'Selamat pagi ☀️');
}, {
  timezone: 'Asia/Jakarta'
});

console.log('Bot berjalan...');
