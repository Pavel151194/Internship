import nodemailer from "nodemailer"

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 587,
            secure: false,
            auth: {
                user: 'p.zhbankov.vironit@vironit.ru',
                pass: 'ojiclrvbotfhcoxl'
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: `Активация аккаунта на ${process.env.API_URL}`,
            text: '',
            html:`
                <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>`
        })
    }
}

export const mailService = new MailService()