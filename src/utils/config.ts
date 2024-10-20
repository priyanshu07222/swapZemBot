import dotenv from 'dotenv'

dotenv.config();

export const config = {
    botToken: process.env.BOT_TOKEN,
    port: process.env.PORT,
    ngrokUrl: process.env.NGROK_URL
}