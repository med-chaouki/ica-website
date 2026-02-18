import rateLimit from "express-rate-limit";

// General limiter for all routes: 100 requests per 15 minutes per IP
export const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Trop de requêtes, veuillez réessayer plus tard.",
    },
});

// Strict limiter for form endpoints: 5 requests per 15 minutes per IP
export const formLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Trop de soumissions, veuillez réessayer dans 15 minutes.",
    },
});
