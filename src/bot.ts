import TelegramBot from "node-telegram-bot-api";
import { config } from "./utils/config";
import { handleCallbackQuery } from "./commands/button";
import handleStartCommand from "./commands/start";


// Initialize bot
// const bot = new TelegramBot(botToken);
const bot = new TelegramBot(config.botToken || "", { polling: true });

bot.on('message', (msg) => {
    handleStartCommand(bot, msg)
})

bot.on('callback_query', (callbackQuery) => {
    handleCallbackQuery(bot, callbackQuery)
})

export default bot