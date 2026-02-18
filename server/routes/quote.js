import crypto from "crypto";
import { Router } from "express";
import transporter from "../config/mailer.js";
import { quoteEmailHtml } from "../utils/emailTemplates.js";
import { validateQuoteForm } from "../middleware/validate.js";
import { formLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", formLimiter, validateQuoteForm, async (req, res) => {
    try {
        // Reference number owned by the route so it can be returned in the response
        const referenceNumber = `ICA-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Nouvelle demande de devis - ${req.body.companyName}`,
            html: quoteEmailHtml(req.body, referenceNumber),
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Devis envoyé avec succès",
            reference: referenceNumber,
        });
    } catch (error) {
        console.error("Quote email error:", error);
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'envoi du devis. Veuillez réessayer plus tard.",
        });
    }
});

export default router;
