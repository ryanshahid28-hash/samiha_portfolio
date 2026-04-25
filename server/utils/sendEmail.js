import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * Sends a contact-form notification email.
 * @param {{ name: string, email: string, message: string }} data
 */
const sendEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `💌 New message from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto;
                  background: #1a1a2e; color: #e0e0e0; border-radius: 12px; overflow: hidden;
                  border: 1px solid rgba(255,42,133,0.3);">
        <div style="background: linear-gradient(135deg, #ff2a85, #7b2ff7); padding: 24px 28px;">
          <h2 style="margin: 0; color: #fff; font-size: 20px;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 28px;">
          <p style="margin: 0 0 16px;"><strong style="color: #ff2a85;">Name:</strong> ${name}</p>
          <p style="margin: 0 0 16px;"><strong style="color: #ff2a85;">Email:</strong>
            <a href="mailto:${email}" style="color: #7b9fff; text-decoration: none;">${email}</a>
          </p>
          <div style="margin-top: 20px; padding: 16px; background: rgba(255,255,255,0.05);
                      border-radius: 8px; border-left: 3px solid #ff2a85;">
            <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase;
                      letter-spacing: 1px; color: #888;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="padding: 16px 28px; text-align: center; font-size: 11px; color: #555;
                    border-top: 1px solid rgba(255,255,255,0.05);">
          Sent from your portfolio contact form
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export default sendEmail
