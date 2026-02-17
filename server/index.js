import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
const result = dotenv.config();
console.log("📝 Dotenv config result:", result.error ? `ERROR: ${result.error}` : "SUCCESS");
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER || "NOT SET");
console.log("🔑 EMAIL_PASS:", process.env.EMAIL_PASS ? `SET (${process.env.EMAIL_PASS.length} chars)` : "NOT SET");
console.log("📬 RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL || "NOT SET");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Validation middleware
const validateContactForm = (req, res, next) => {
    const { name, company, email, phone, sector, message } = req.body;

    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push("Le nom est requis (minimum 2 caractères)");
    }
    if (!company || company.trim().length < 2) {
        errors.push("L'entreprise est requise (minimum 2 caractères)");
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Email invalide");
    }
    if (!phone || phone.trim().length < 10) {
        errors.push("Numéro de téléphone invalide (minimum 10 caractères)");
    }
    if (!sector || sector.trim().length < 1) {
        errors.push("Veuillez sélectionner un secteur");
    }
    if (!message || message.trim().length < 10) {
        errors.push("Le message doit contenir au moins 10 caractères");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors,
        });
    }

    next();
};

// Validation middleware for quote form
const validateQuoteForm = (req, res, next) => {
    const { companyName, businessName, sector, services, firstName, lastName, email, phone, address, city } = req.body;

    const errors = [];

    if (!companyName || companyName.trim().length < 2) errors.push("Le nom de l'entreprise est requis");
    if (!businessName || businessName.trim().length < 1) errors.push("La raison sociale est requise");
    if (!sector) errors.push("Le secteur d'activité est requis");
    if (!services || services.length === 0) errors.push("Au moins un service doit être sélectionné");
    if (!firstName || firstName.trim().length < 2) errors.push("Le prénom est requis");
    if (!lastName || lastName.trim().length < 2) errors.push("Le nom est requis");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Email invalide");
    if (!phone || phone.trim().length < 10) errors.push("Numéro de téléphone invalide");
    if (!address || address.trim().length < 5) errors.push("L'adresse est requise");
    if (!city || city.trim().length < 2) errors.push("La ville est requise");

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors,
        });
    }

    next();
};

async function startServer() {
    const app = express();
    const server = createServer(app);

    // Middleware
    app.use(express.json());
    app.use(
        cors({
            origin:
                process.env.NODE_ENV === "production"
                    ? process.env.FRONTEND_URL
                    : ["http://localhost:5173", "http://localhost:3000"],
            credentials: true,
        })
    );

    // API Routes

    // Contact Form Endpoint
    app.post("/api/contact", validateContactForm, async (req, res) => {
        try {
            const { name, company, email, phone, sector, message } = req.body;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: "mohamedchaouki089@gmail.com",
                subject: `Nouveau message de contact - ${company}`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                            <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
                                <h1>📧 Nouveau Message de Contact</h1>
                            </div>
                            <div style="background-color: white; padding: 30px;">
                                <div style="background-color: #eff6ff; padding: 15px; border-radius: 5px;">
                                    <h2 style="color: #1e40af; margin-top: 0;">Informations</h2>
                                    <p><strong>Nom:</strong> ${name}</p>
                                    <p><strong>Entreprise:</strong> ${company}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                                    <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
                                    <p><strong>Secteur:</strong> ${sector}</p>
                                </div>
                                <div style="margin-top: 30px;">
                                    <h3>Message:</h3>
                                    <div style="background-color: #f3f4f6; padding: 15px; border-left: 3px solid #1e40af;">${message}</div>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: "Message envoyé avec succès" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ success: false, message: "Erreur lors de l'envoi", error: error.message });
        }
    });

    // Quote Form Endpoint
    app.post("/api/quote", validateQuoteForm, async (req, res) => {
        try {
            // Generate reference number
            const referenceNumber = "ICA-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);

            const {
                companyName, businessName, sector, services,
                projectDescription, urgency, desiredDate, numberOfEquipments,
                firstName, lastName, email, phone, address, city
            } = req.body;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: "mohamedchaouki089@gmail.com",
                subject: `Nouvelle demande de devis - ${companyName}`,
                html: `
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                            <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
                                <h1>📋 Nouvelle Demande de Devis</h1>
                                <p style="margin: 0;">Réf: ${referenceNumber}</p>
                            </div>
                            <div style="background-color: white; padding: 30px;">
                                
                                <div style="margin-bottom: 20px;">
                                    <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">🏢 Entreprise</h3>
                                    <p><strong>Nom:</strong> ${companyName}</p>
                                    <p><strong>Raison Sociale:</strong> ${businessName}</p>
                                    <p><strong>Secteur:</strong> ${sector}</p>
                                </div>

                                <div style="margin-bottom: 20px;">
                                    <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">👤 Contact</h3>
                                    <p><strong>Nom complet:</strong> ${firstName} ${lastName}</p>
                                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                                    <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
                                    <p><strong>Adresse:</strong> ${address}, ${city}</p>
                                </div>

                                <div style="margin-bottom: 20px;">
                                    <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">🛠️ Services & Projet</h3>
                                    <p><strong>Services demandés:</strong> ${services.join(", ")}</p>
                                    <p><strong>Urgence:</strong> ${urgency}</p>
                                    <p><strong>Date souhaitée:</strong> ${desiredDate || "Non spécifiée"}</p>
                                    <p><strong>Équipements:</strong> ${numberOfEquipments || "Non spécifié"}</p>
                                </div>

                                <div style="margin-top: 20px;">
                                    <h3>Description du projet:</h3>
                                    <div style="background-color: #f3f4f6; padding: 15px; border-left: 3px solid #1e40af;">${projectDescription}</div>
                                </div>
                            </div>
                        </div>
                    </body>
                    </html>
                `,
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({
                success: true,
                message: "Devis envoyé avec succès",
                reference: referenceNumber
            });
        } catch (error) {
            console.error("Error sending quote email:", error);
            res.status(500).json({ success: false, message: "Erreur lors de l'envoi", error: error.message });
        }
    });

    // Health check endpoint
    app.get("/api/health", (_req, res) => {
        res.json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // Serve static files from dist/public in production
    if (process.env.NODE_ENV === "production") {
        const staticPath = path.resolve(__dirname, "public");
        app.use(express.static(staticPath));

        // Handle client-side routing - serve index.html for all routes
        app.get("*", (_req, res) => {
            res.sendFile(path.join(staticPath, "index.html"));
        });
    }

    const port = process.env.PORT || 3000;

    server.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}/`);
        console.log(`📧 Email configured: ${process.env.EMAIL_USER ? "✓" : "✗"}`);
        console.log(`📬 Recipient: mohamedchaouki089@gmail.com`);
    });
}

startServer().catch(console.error);
