
import express, { Request, Response } from 'express';
import bot from './bot';
import { config } from './utils/config';


const app = express();
app.use(express.json());

// Set Telegram webhook URL (add /webhook at the end)
bot.setWebHook(`${config.ngrokUrl}/webhook`);

// Set the POST route to handle Telegram updates
app.post('/webhook', (req: Request, res: Response) => {
    try {
        bot.processUpdate(req.body);
        res.sendStatus(200);
        console.log('Webhook received and processed successfullyy');
    } catch (error) {
        console.error('Error processing update:', error);
        res.sendStatus(500);
    }
});

// A simple GET route to check if Ngrok is working
app.get('/', (req: Request, res: Response) => {
    res.send('Bot is running!');
});


// Start the Express server
app.listen(config.port, () => {
    console.log('Listening on port', config.port);
});
