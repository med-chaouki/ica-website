# ICA Website - Comprehensive Documentation

**ICA (Inspection Control Audit)** — Modern web application for an industrial inspection and audit control bureau.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technologies](#technologies)
4. [Getting Started](#getting-started)
5. [Client-Side Documentation](#client-side-documentation)
6. [Server-Side Documentation](#server-side-documentation)
7. [API Reference](#api-reference)
8. [Deployment](#deployment)
9. [Environment Variables](#environment-variables)
10. [Development Conventions](#development-conventions)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

ICA Website is a full-stack web application serving as the corporate website for ICA, a specialized industrial inspection, control, and audit bureau. The application features:

- **Public-facing website** with multiple informational pages
- **Multi-step quote request form** with validation and email notifications
- **Contact form** with email delivery
- **Responsive design** supporting mobile, tablet, and desktop
- **Dark mode support** with modern UI/UX
- **Docker-based deployment** for easy production deployment

---

## Architecture

```
┌─────────────────────────────────────────────┐
│                  Client                      │
│  React + Vite + Tailwind CSS + Shadcn/UI    │
│  (Served by Nginx on port 80)               │
└───────────────┬─────────────────────────────┘
                │ HTTP Requests
                ▼
┌─────────────────────────────────────────────┐
│                  Server                      │
│  Express.js + Node.js                        │
│  (API on port 3000)                          │
└───────────────┬─────────────────────────────┘
                │ SMTP
                ▼
┌─────────────────────────────────────────────┐
│              Email Service                   │
│  Gmail SMTP (Nodemailer)                     │
└─────────────────────────────────────────────┘
```

### Project Structure

```
ica-website/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Shadcn/UI primitives
│   │   │   └── quote/     # Multi-step quote form
│   │   ├── pages/         # Route-level page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts (Theme)
│   │   ├── services/      # API service layer
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   ├── Dockerfile         # Multi-stage build
│   └── nginx.conf         # Nginx configuration
├── server/                # Backend application
│   ├── routes/           # API route handlers
│   ├── middleware/        # Rate limiting, validation
│   ├── config/           # Mailer configuration
│   ├── utils/            # Email templates
│   └── Dockerfile        # Node.js container
└── docker-compose.yml    # Orchestration
```

---

## Technologies

### Client-Side

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | 18.3.1 |
| Build Tool | Vite | 7.2.2 |
| Styling | Tailwind CSS v4 | 4.1.14 |
| Router | Wouter | 3.3.5 |
| UI Library | shadcn/ui | — |
| Icons | Lucide React | 0.453.0 |
| Forms | React Hook Form + Zod | 7.64.0 / 4.1.12 |
| Data Fetching | TanStack React Query | 4.41.0 |
| HTTP | Axios | 1.12.0 |
| Animations | Framer Motion | 12.23.22 |
| Charts | Recharts | 2.15.2 |
| Maps | Leaflet | 1.9.4 |
| Notifications | Sonner | 2.0.7 |
| Theme | next-themes | 0.4.6 |

### Server-Side

| Package | Version | Purpose |
|---------|---------|---------|
| Express | ^4.21.2 | Web framework |
| CORS | ^2.8.5 | Cross-origin support |
| Dotenv | ^17.2.3 | Environment variables |
| Express Rate Limit | ^8.2.1 | Abuse prevention |
| Nodemailer | ^7.0.12 | Email delivery |
| Sanitize HTML | ^2.17.0 | XSS protection |

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **pnpm**
- **Docker & Docker Compose** (optional, for containerized deployment)

### Local Development Setup

#### 1. Client Setup

```bash
cd client
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

#### 2. Server setup

```bash
cd server
npm install
# Copy and configure environment variables
cp .env.example .env
npm run dev
```

The API will be available at `http://localhost:3000`.

### Available Scripts

#### Client

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |

#### Server

| Command | Description |
|---------|-------------|
| `npm start` | Run production server |
| `npm run dev` | Run development server with auto-reload |

---

## Client-Side Documentation

### Routing

The application uses **Wouter** for client-side routing. Routes are defined in `src/App.jsx`:

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with hero section |
| `/services` | Services | Inspection and audit services |
| `/approach` | Approach | Methodology and process |
| `/sectors` | Sectors | Industry sectors served |
| `/advantages` | Advantages | Value proposition |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form |
| `/quote` | QuoteRequest | Multi-step quote wizard |
| `*` | NotFound | 404 fallback page |

### Component Architecture

#### Core Components

- **`Header.jsx`** — Navigation header with logo and menu
- **`Footer.jsx`** — Site footer with links and contact info
- **`WhatsAppButton.jsx`** — Floating WhatsApp contact button
- **`Map.jsx`** — Leaflet map integration for location display
- **`Partners.jsx`** — Partner/carousel component
- **`ErrorBoundary.jsx`** — React error boundary for graceful error handling

#### Quote Form Components

Located in `src/components/quote/`:

| Component | Purpose |
|-----------|---------|
| `MultiStepForm.jsx` | Main wizard controller |
| `Step1Company.jsx` | Company information collection |
| `Step2Services.jsx` | Service selection |
| `Step3Project.jsx` | Project details |
| `Step4Contact.jsx` | Contact information |
| `Step5Validation.jsx` | Review and submission |
| `schema.js` | Zod validation schema |

### State Management

- **TanStack React Query** — Server state and caching
- **React Context** — Theme management (light/dark mode)
- **Local Storage** — Quote form persistence

### API Integration

API calls are centralized in `src/services/api.js`:

```javascript
// Contact form submission
export async function submitContactForm(data)

// Quote request submission
export async function submitQuoteRequest(data)
```

Both use native `fetch` with structured error handling.

### Design System

#### Color Palette (OKLCH)

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `oklch(0.45 0.15 260)` | Main brand color (Professional Blue) |
| Secondary | Technical Grey | Supporting elements |
| Accent | `oklch(0.7 0.15 50)` | CTAs and highlights (Action Orange) |
| Destructive | Red | Error states |

#### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Custom Hooks

| Hook | Purpose |
|------|---------|
| `useComposition.js` | Input composition handling (IME support) |
| `useMobile.jsx` | Mobile device detection |
| `usePersistFn.js` | Stable function references |

---

## Server-Side Documentation

### Architecture

```
index.js (Entry Point)
    │
    ├── Loads environment variables
    ├── Creates HTTP server
    └── Wraps Express app
            │
            └── app.js (Express Configuration)
                    │
                    ├── Middleware Setup
                    │   ├── express.json()
                    │   ├── cors()
                    │   └── rateLimiter()
                    │
                    ├── Routes
                    │   ├── POST /api/contact
                    │   ├── POST /api/quote
                    │   └── GET /api/health
                    │
                    └── Static File Serving (Production)
```

### Middleware Pipeline

1. **`express.json()`** — Parse JSON request bodies
2. **`cors()`** — Handle cross-origin requests (environment-aware)
3. **Rate Limiter** — Global: 100 req/15min per IP
4. **Route-specific middleware** — Validation + handlers

#### Rate Limiting

| Limiter | Limit | Applied To |
|---------|-------|------------|
| General | 100 requests / 15 min | All endpoints |
| Form | 5 requests / 15 min | Contact & Quote endpoints |

#### Form Validation

Both contact and quote forms are validated server-side:

- **Contact Form**: 6 fields (name, company, email, phone, sector, message)
- **Quote Form**: 12 fields including array validation for services

All validation errors are returned in French with detailed field-level messages.

### Email System

#### Configuration (`config/mailer.js`)

Uses Nodemailer with Gmail SMTP:

```javascript
transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
})
```

#### Email Templates (`utils/emailTemplates.js`)

- **`contactEmailHtml()`** — Branded HTML email for contact submissions
- **`quoteEmailHtml()`** — Detailed multi-section email with quote details

**Security**: All user input is sanitized with `sanitize-html` (all HTML tags stripped) to prevent XSS attacks.

### Reference Number Generation

Quote requests generate unique references:

```
ICA-{YEAR}-{8-CHAR-UUID}
Example: ICA-2026-A1B2C3D4
```

---

## API Reference

### Base URL

- Development: `http://localhost:3000`
- Production: Configured via `VITE_API_URL`

### Endpoints

#### Health Check

```
GET /api/health
Response: { "status": "ok", "timestamp": "2026-04-13T..." }
```

#### Contact Form

```
POST /api/contact
Content-Type: application/json

Body:
{
  "name": "string",
  "company": "string",
  "email": "string",
  "phone": "string",
  "sector": "string",
  "message": "string"
}

Success Response (200):
{
  "success": true,
  "message": "Message envoyé avec succès"
}

Error Response (400):
{
  "success": false,
  "errors": ["Field validation message"]
}
```

#### Quote Request

```
POST /api/quote
Content-Type: application/json

Body:
{
  "companyName": "string",
  "businessName": "string",
  "sector": "string",
  "services": ["string"],
  "projectDescription": "string",
  "urgency": "string",
  "desiredDate": "string",
  "numberOfEquipments": "number",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "address": "string",
  "city": "string"
}

Success Response (200):
{
  "success": true,
  "message": "Devis envoyé avec succès",
  "reference": "ICA-2026-A1B2C3D4"
}
```

### CORS Configuration

| Environment | Allowed Origins |
|-------------|-----------------|
| Development | `localhost:5173`, `localhost:3000` |
| Production | `FRONTEND_URL` from environment |

---

## Deployment

### Docker Compose (Recommended)

#### Development

```bash
docker compose up --build
```

#### Production

1. Set environment variables:
   ```bash
   export VITE_API_URL=https://your-domain.com
   ```

2. Configure server environment:
   ```bash
   cp server/.env.example server/.env
   # Edit server/.env with production values
   ```

3. Deploy:
   ```bash
   docker compose up --build -d
   ```

### Docker Services

| Service | Container Name | Port | Description |
|---------|---------------|------|-------------|
| Server | ica-server | 3000 | Express API |
| Client | ica-client | 80 | Nginx static files |

### Manual Production Build

#### Client

```bash
cd client
npm run build
# Output: dist/ directory
```

#### Server

```bash
cd server
# Set NODE_ENV=production
# Ensure .env is configured
npm start
```

### Nginx Configuration

The client uses `nginx.conf` with:

- **SPA Fallback**: All routes serve `index.html` for client-side routing
- **Asset Caching**: 1-year cache with `immutable` header for static assets
- **Gzip Compression**: Enabled for text, CSS, JS, JSON, XML

---

## Environment Variables

### Client (`.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL (no trailing slash) | `http://localhost:3000` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp contact number | — |

### Server (`.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode | `development` |
| `EMAIL_USER` | Gmail sender address | *(required)* |
| `EMAIL_PASS` | Gmail app-specific password | *(required)* |
| `RECIPIENT_EMAIL` | Form submission recipient | `mohamedchaouki089@gmail.com` |
| `FRONTEND_URL` | CORS origin in production | *(required in production)* |

### Setting Up Email

1. Enable 2-factor authentication on your Gmail account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833)
3. Use the app password (not your regular password) in `EMAIL_PASS`

---

## Development Conventions

### Code Formatting

The project uses **Prettier** for code formatting:

```bash
npm run format  # In client directory
```

Configuration: `.prettierrc`

### Path Aliases

Configured in `jsconfig.json`:

```javascript
@/*        → src/*
@shared/*  → src/shared/*
```

Example:
```javascript
import { cn } from '@/lib/utils'
import { PARTNERS } from '@/data/partners'
```

### Component Naming

- Components use **PascalCase** (e.g., `MultiStepForm.jsx`)
- Custom hooks use **camelCase** with `use` prefix (e.g., `useMobile.jsx`)

### API Conventions

- All endpoints return JSON with `success: boolean`
- Errors include descriptive `message` or `errors` array
- French localization for user-facing messages

### Git Ignore Patterns

The `.gitignore` excludes:
- Dependencies (`node_modules/`)
- Build outputs (`dist/`, `build/`)
- Environment files (`.env*`)
- IDE files (`.vscode/`, `.idea/`)
- Logs and temporary files

---

## Troubleshooting

### Common Issues

#### Client won't start

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Server email not working

1. Verify `EMAIL_USER` and `EMAIL_PASS` in `server/.env`
2. Ensure Gmail 2FA is enabled and app password is used
3. Check server logs for authentication errors

#### CORS errors

- Ensure `VITE_API_URL` matches your server URL exactly (no trailing slash)
- In production, set `FRONTEND_URL` in server `.env`

#### Build failures

```bash
# Check Node.js version
node -v  # Should be v18+

# Clear Vite cache
rm -rf node_modules/.vite
```

#### Docker issues

```bash
# Rebuild without cache
docker compose build --no-cache

# View logs
docker compose logs -f

# Stop containers
docker compose down
```

### Rate Limiting

If you hit rate limits during testing:

- General API: 100 requests per 15 minutes per IP
- Form endpoints: 5 requests per 15 minutes per IP

Rate limit responses include French error messages and standard headers:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `Retry-After`

---

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)

---

## License

© 2026 ICA (Inspection Control Audit). All rights reserved.
