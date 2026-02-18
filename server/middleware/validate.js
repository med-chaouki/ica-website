// ── Contact Form Validation ──────────────────────────────────────────

export const validateContactForm = (req, res, next) => {
    const { name, company, email, phone, sector, message } = req.body;
    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push("Le nom est requis (minimum 2 caractères)");
    } else if (name.length > 100) {
        errors.push("Le nom ne doit pas dépasser 100 caractères");
    }

    if (!company || company.trim().length < 2) {
        errors.push("L'entreprise est requise (minimum 2 caractères)");
    } else if (company.length > 200) {
        errors.push("Le nom de l'entreprise ne doit pas dépasser 200 caractères");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Email invalide");
    } else if (email.length > 254) {
        errors.push("L'email ne doit pas dépasser 254 caractères");
    }

    if (!phone || phone.trim().length < 10) {
        errors.push("Numéro de téléphone invalide (minimum 10 caractères)");
    } else if (phone.length > 20) {
        errors.push("Le numéro de téléphone ne doit pas dépasser 20 caractères");
    }

    if (!sector || sector.trim().length < 1) {
        errors.push("Veuillez sélectionner un secteur");
    } else if (sector.length > 100) {
        errors.push("Le secteur ne doit pas dépasser 100 caractères");
    }

    if (!message || message.trim().length < 10) {
        errors.push("Le message doit contenir au moins 10 caractères");
    } else if (message.length > 2000) {
        errors.push("Le message ne doit pas dépasser 2000 caractères");
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    next();
};

// ── Quote Form Validation ────────────────────────────────────────────

export const validateQuoteForm = (req, res, next) => {
    const {
        companyName, businessName, sector, services,
        projectDescription, firstName, lastName,
        email, phone, address, city,
    } = req.body;

    const errors = [];

    if (!companyName || companyName.trim().length < 2) {
        errors.push("Le nom de l'entreprise est requis");
    } else if (companyName.length > 200) {
        errors.push("Le nom de l'entreprise ne doit pas dépasser 200 caractères");
    }

    if (!businessName || businessName.trim().length < 1) {
        errors.push("La raison sociale est requise");
    } else if (businessName.length > 200) {
        errors.push("La raison sociale ne doit pas dépasser 200 caractères");
    }

    if (!sector) {
        errors.push("Le secteur d'activité est requis");
    } else if (sector.length > 100) {
        errors.push("Le secteur ne doit pas dépasser 100 caractères");
    }

    if (!services || !Array.isArray(services) || services.length === 0) {
        errors.push("Au moins un service doit être sélectionné");
    } else if (services.length > 20) {
        errors.push("Vous ne pouvez pas sélectionner plus de 20 services");
    }

    if (!firstName || firstName.trim().length < 2) {
        errors.push("Le prénom est requis");
    } else if (firstName.length > 100) {
        errors.push("Le prénom ne doit pas dépasser 100 caractères");
    }

    if (!lastName || lastName.trim().length < 2) {
        errors.push("Le nom est requis");
    } else if (lastName.length > 100) {
        errors.push("Le nom ne doit pas dépasser 100 caractères");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Email invalide");
    } else if (email.length > 254) {
        errors.push("L'email ne doit pas dépasser 254 caractères");
    }

    if (!phone || phone.trim().length < 10) {
        errors.push("Numéro de téléphone invalide");
    } else if (phone.length > 20) {
        errors.push("Le numéro de téléphone ne doit pas dépasser 20 caractères");
    }

    if (!address || address.trim().length < 5) {
        errors.push("L'adresse est requise");
    } else if (address.length > 500) {
        errors.push("L'adresse ne doit pas dépasser 500 caractères");
    }

    if (!city || city.trim().length < 2) {
        errors.push("La ville est requise");
    } else if (city.length > 100) {
        errors.push("La ville ne doit pas dépasser 100 caractères");
    }

    if (projectDescription && projectDescription.length > 5000) {
        errors.push("La description du projet ne doit pas dépasser 5000 caractères");
    }

    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors });
    }

    next();
};
