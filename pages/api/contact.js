
import { createTransport } from 'nodemailer';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        console.log(req.body)
        const server = {
            host: process.env.EMAIL_SERVER_HOST,
            port: Number(process.env.EMAIL_EMAIL_SERVER_PORT),
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            },
        }
        const transport = createTransport(server);
        try {
            const result = await transport.sendMail({
                to: 'swasthikshetty10902@gmail.com',
                from: 'swasthiksh3tty@gmail.com',
                subject: `Contact from ${name}`,
                text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
                `
            });
            res.status(200)
            res.json({ status: 200 })
        }
        catch (error) {
            console.log(error)
            res.status(500)
            res.json({ status: 500 })
        }
    } else {
        res.json({ status: 200 })
        res.status(200)
    }
}