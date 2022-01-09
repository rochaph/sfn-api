import { createTransport, Transporter } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      service: process.env.STMP_PROVIDER,
      auth: {
        user: process.env.SMTP_EMAIL, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });
  }

  public async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.transporter.sendMail({
        from: `sfn-api <${process.env.ALERT_EMAIL}>`,
        to,
        subject,
        text,
      });
      console.log("Email sent");
    } catch (e) {
      console.error(e);
    }
  }
}
