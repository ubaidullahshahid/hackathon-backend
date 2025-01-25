const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
};

// VNhqswlhWjCF2wJrvxtVnmVu vercel token hw ye

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: `Saylani <ubaidullahshahid098@gmail.com>`,
    to,
    subject,
    html,
  };

  const transporter = createTransporter();

  try {
    const info = await transporter.sendMail(mailOptions);
    return `Email sent: ${info.response}`;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};

module.exports = sendEmail;
