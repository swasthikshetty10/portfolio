const { Webhook, MessageBuilder } = require('discord-webhook-node');

export default function handler(req, res) {
    const hook = new Webhook(process.env.WEBHOOK_URL);
    if (req.method === 'POST') {
        console.log(req.body)
        const embed = new MessageBuilder()
            .setTitle('Contact Form')
            .addField('Name', req.body.name)
            .addField('email', req.body.email)
            .addField('message', req.body.message)
            .setColor('#00b0f4')
            .setTimestamp();
        hook.send(embed);
        res.status(200)
        res.json({ status: 200 })
    } else {
        res.json({ status: 200 })
        res.status(200)
    }
}