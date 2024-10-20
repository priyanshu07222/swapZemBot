import TelegramBot, { Message } from "node-telegram-bot-api";
import { generateSolanaWallaet } from "../utils/solana";

const handleStartCommand = (bot: TelegramBot, msg: Message) => {
    const chatId = msg.chat.id;
    const text = msg.text
    const publicKey = generateSolanaWallaet().publicKey
    const welcomeMessage = `Welcome to swapZemBot\n\nSolana’s fastest bot to trade any coin (SPL token), built by the SwapZem community!\n\nYou currently have no SOL in your wallet. To start trading, deposit SOL to your swapZem wallet address:\n\n\`${publicKey.toBase58()}\` (tap to copy)
                
    Once done, tap refresh and your balance will appear here.
    
    For more info on your wallet and to retrieve your private key, tap the wallet button below. User funds are safe on swapZemBot, but if you expose your private key we can't protect you!`;

    // send message with buttons
    if (text === '/start') {
        bot.sendMessage(chatId, welcomeMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Buy',
                        callback_data: 'buy'
                    }],
                    [{
                        text: 'wallet',
                        callback_data: 'wallet'
                    }],
                    [{
                        text: 'Sell',
                        callback_data: 'sell'
                    }],
                    [{
                        text: 'Help',
                        callback_data: 'help'
                    }],
                    [{
                        text: 'Refresh',
                        callback_data: 'refresh'
                    }],
                    [{
                        text: 'Pin',
                        callback_data: 'pin'
                    }],

                ]
            }
        })
    } else {
        bot.sendMessage(chatId, `Your address is this: ${text}`);
    }
}

export default handleStartCommand