import { z } from "zod";

export const quoteSchema = z.object({
    // Step 1: Company
    companyName: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
    businessName: z.string().min(1, "La raison sociale est requise"),
    sector: z.enum([
        'Industrie',
        'Logistique & Transport',
        'BTP & Infrastructures',
        'Énergie',
        'Collectivités & Établissements publics',
        'Autre'
    ], { required_error: "Veuillez sélectionner un secteur d'activité" }),

    // Step 2: Services
    services: z.array(z.string()).min(1, "Veuillez sélectionner au moins un service"),

    // Step 3: Project
    projectDescription: z.string()
        .min(50, "La description doit contenir au moins 50 caractères")
        .max(1000, "La description ne peut pas dépasser 1000 caractères"),
    urgency: z.enum([
        'Urgent (< 7 jours)',
        'Normal (7-15 jours)',
        'Planifié (> 15 jours)'
    ], { required_error: "Veuillez indiquer l'urgence" }),
    desiredDate: z.string().optional(), // Date string YYYY-MM-DD
    numberOfEquipments: z.coerce.number().min(1, "Le nombre d'équipements doit être au moins 1").optional(),

    // Step 4: Contact
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Format d'email invalide"),
    phone: z.string().regex(/^\+212\d{9}$/, "Le numéro doit être au format +212XXXXXXXXX"),
    address: z.string().min(5, "L'adresse est requise"),
    city: z.string().min(2, "La ville est requise"),

    // Step 5: Validation
    acceptTerms: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter les conditions" }) }),
    acceptGDPR: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }) }),
});

export const defaultValues = {
    companyName: "",
    businessName: "",
    sector: undefined,
    services: [],
    projectDescription: "",
    urgency: undefined,
    desiredDate: "",
    numberOfEquipments: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "+212",
    address: "",
    city: "",
    acceptTerms: false,
    acceptGDPR: false,
};
