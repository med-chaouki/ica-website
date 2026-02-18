import sanitizeHtml from "sanitize-html";

// Strip ALL HTML — output is plain text safe for injection into templates
const clean = (value) =>
    sanitizeHtml(value == null ? "" : String(value), {
        allowedTags: [],
        allowedAttributes: {},
    });

// ── Contact Email ────────────────────────────────────────────────────

export function contactEmailHtml({ name, company, email, phone, sector, message }) {
    return `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1>📧 Nouveau Message de Contact</h1>
        </div>
        <div style="background-color: white; padding: 30px;">
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 5px;">
                <h2 style="color: #1e40af; margin-top: 0;">Informations</h2>
                <p><strong>Nom:</strong> ${clean(name)}</p>
                <p><strong>Entreprise:</strong> ${clean(company)}</p>
                <p><strong>Email:</strong> <a href="mailto:${clean(email)}">${clean(email)}</a></p>
                <p><strong>Téléphone:</strong> <a href="tel:${clean(phone)}">${clean(phone)}</a></p>
                <p><strong>Secteur:</strong> ${clean(sector)}</p>
            </div>
            <div style="margin-top: 30px;">
                <h3>Message:</h3>
                <div style="background-color: #f3f4f6; padding: 15px; border-left: 3px solid #1e40af;">${clean(message)}</div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

// ── Quote Email ──────────────────────────────────────────────────────

export function quoteEmailHtml(data, referenceNumber) {
    const {
        companyName, businessName, sector, services,
        projectDescription, urgency, desiredDate, numberOfEquipments,
        firstName, lastName, email, phone, address, city,
    } = data;

    const servicesList = Array.isArray(services)
        ? services.map((s) => clean(s)).join(", ")
        : clean(services);

    return `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
            <h1>📋 Nouvelle Demande de Devis</h1>
            <p style="margin: 0;">Réf: ${clean(referenceNumber)}</p>
        </div>
        <div style="background-color: white; padding: 30px;">

            <div style="margin-bottom: 20px;">
                <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">🏢 Entreprise</h3>
                <p><strong>Nom:</strong> ${clean(companyName)}</p>
                <p><strong>Raison Sociale:</strong> ${clean(businessName)}</p>
                <p><strong>Secteur:</strong> ${clean(sector)}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">👤 Contact</h3>
                <p><strong>Nom complet:</strong> ${clean(firstName)} ${clean(lastName)}</p>
                <p><strong>Email:</strong> <a href="mailto:${clean(email)}">${clean(email)}</a></p>
                <p><strong>Téléphone:</strong> <a href="tel:${clean(phone)}">${clean(phone)}</a></p>
                <p><strong>Adresse:</strong> ${clean(address)}, ${clean(city)}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="color: #1e40af; border-bottom: 2px solid #eff6ff; padding-bottom: 5px;">🛠️ Services & Projet</h3>
                <p><strong>Services demandés:</strong> ${servicesList}</p>
                <p><strong>Urgence:</strong> ${clean(urgency)}</p>
                <p><strong>Date souhaitée:</strong> ${clean(desiredDate) || "Non spécifiée"}</p>
                <p><strong>Équipements:</strong> ${clean(numberOfEquipments) || "Non spécifié"}</p>
            </div>

            <div style="margin-top: 20px;">
                <h3>Description du projet:</h3>
                <div style="background-color: #f3f4f6; padding: 15px; border-left: 3px solid #1e40af;">${clean(projectDescription)}</div>
            </div>
        </div>
    </div>
</body>
</html>`;
}
