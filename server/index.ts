import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: `Portfolio message from ${name}`,
            text: message,
        });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ message: "Email failed to send" });
    }
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
