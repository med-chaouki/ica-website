import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { generalLimiter } from "./middleware/rateLimiter.js";
import contactRouter from "./routes/contact.js";
import quoteRouter from "./routes/quote.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// ── Static Files (production) ────────────────────────────────────────
if (process.env.NODE_ENV === "production") {
    const staticPath = path.resolve(__dirname, "public");
    app.use(express.static(staticPath));

    // Client-side routing fallback
    app.get("*", (_req, res) => {
        res.sendFile(path.join(staticPath, "index.html"));
    });
}

export default app;
