import express from "express";
import cors from "cors";
import { generalLimiter } from "./middleware/rateLimiter.js";
import contactRouter from "./routes/contact.js";
import quoteRouter from "./routes/quote.js";

const app = express();

// ── Core Middleware ───────────────────────────────────────────────────
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
app.use(generalLimiter);

// ── API Routes ───────────────────────────────────────────────────────
app.use("/api/contact", contactRouter);
app.use("/api/quote", quoteRouter);

// Health check
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});



export default app;
