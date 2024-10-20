import TelegramBot, { CallbackQuery, ChatId, Message } from "node-telegram-bot-api";

export const handleCallbackQuery = (bot: TelegramBot, callbackQuery: CallbackQuery) => {
    const chatId = callbackQuery.message?.chat.id as ChatId
    const messageId = callbackQuery.message?.message_id!
    const data = callbackQuery.data

    if (data === 'buy') {
        // Respond to the button click
        bot.sendMessage(chatId, 'Buy Token:\n\nTo buy a token enter the token Address, or a URL from pump.fun, Birdeye, DEX Screener or Meteora.', {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Close', callback_data: 'close' } // Add Close button
                ]]
            }
        });
    } else if (data === 'wallet') {

        bot.sendMessage(chatId, 'You clicked wallet', {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Close', callback_data: 'close' } // Add Close button
                ]]
            }
        });
    } else if (data === 'sell') {
        bot.sendMessage(chatId, 'You clicked sell', {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Close', callback_data: 'close' } // Add Close button
                ]]
            }
        });
    } else if (data === 'help') {
        bot.sendMessage(chatId, 'You clicked help', {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Close', callback_data: 'close' } // Add Close button
                ]]
            }
        });
    } else if (data === 'refresh') {
        // bot.sendMessage(chatId, 'You clicked refresh', {
        //     reply_markup: {
        //         inline_keyboard: [[
        //             { text: 'Close', callback_data: 'close' } // Add Close button
        //         ]]
        //     }
        // });
        bot.getUpdates()
        console.log("update refresh run")
    } else if (data === 'pin') {
        // bot.sendMessage(chatId, 'You clicked pin', {
        //     reply_markup: {
        //         inline_keyboard: [[
        //             { text: 'Close', callback_data: 'close' } // Add Close button
        //         ]]
        //     }
        // });
        bot.pinChatMessage(chatId, messageId)
    } else if (data === 'alert') {
        bot.sendMessage(chatId, 'You clicked alert', {
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Close', callback_data: 'close' } // Add Close button
                ]]
            }
        });
    } else if (data === 'close') {
        // If the "Close" button is clicked, delete the message
        handleCloseBtn(bot, chatId, messageId)

    } else {
        bot.sendMessage(chatId, 'sorry not reconized')
    }
}




const handleCloseBtn = async (bot: TelegramBot, chatId: ChatId, messageId: number) => {

    try {
        await bot.deleteMessage(chatId, messageId)

        console.log("Message deleted", chatId, messageId)
    } catch (error) {
        console.error("Error deleting message", error)
    }
}