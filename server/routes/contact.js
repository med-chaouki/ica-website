import { Router } from "express";
import transporter from "../config/mailer.js";
import { contactEmailHtml } from "../utils/emailTemplates.js";
import { validateContactForm } from "../middleware/validate.js";
import { formLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", formLimiter, validateContactForm, async (req, res) => {
    try {
        const { name, company, email, phone, sector, message } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Nouveau message de contact - ${company}`,
            html: contactEmailHtml({ name, company, email, phone, sector, message }),
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Message envoyé avec succès",
        });
    } catch (error) {
        console.error("Contact email error:", error);
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.",
        });
    }
});

export default router;
