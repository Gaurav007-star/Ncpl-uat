/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import morgan from "morgan";
import nodemailer from "nodemailer";
import axios from "axios";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.post("/api/sendmail", async (req, res) => {
  const { name, email, phone, message, captchaKey } = req.body;

  if (!name || !email || !phone || !message || !captchaKey) {
    return res.status(400).json({
      message: "Provide correct details"
    });
  }

  const verifyCaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${captchaKey}`;

  const captchaVerifyStatus = await axios.post(verifyCaptchaUrl);

  if (!captchaVerifyStatus.data.success) {
    return res.status(400).json({
      message: "Captcha verification failed"
    });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_RECEIVER_EMAIL,
    subject: "You have received new contact from NTNL website",
    text: `
    Name : ${name}
    Email : ${email}
    Phone : ${phone}

    ${message}

    Thank you,
    NTNL Website Administrator
    `
  };

  try {
    const responseData = await transporter.sendMail(mailOptions);
    // console.log(responseData);

    res.status(200).json({
      message: "Message sent successfully"
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to sent"
    });
  }
});

app.get("/getvalue", (req, res) => {
  res.status(200).json({
    message: "GEt value"
  });
});

app.listen(process.env.PORT, () => {
  console.log("listining");
});

export default app;
