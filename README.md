# Premium Developer Portfolio Monorepo

Welcome to the Next.js, TypeScript, and Turborepo monorepo codebase for Rithwik Racharla's portfolio website. This project has been rebuilt from a single-page HTML file into an industry-grade, highly scalable, and modular workspace.

## 🚀 Architecture Overview

This project is configured as a Turborepo monorepo with `npm` workspaces:

```
portfolio/
├── apps/
│   └── web/                    # Next.js 14 App Router App (React 18 + TS)
│       ├── src/
│       │   ├── app/            # App Router pages & API routes
│       │   │   ├── api/
│       │   │   │   ├── chat/   # Server-side OpenAI streaming proxy
│       │   │   │   └── contact/# Form validation & message receiver
│       │   │   └── globals.css # Global styles + css variables
│       │   ├── components/     # Feature sections & layout elements
│       │   └── content/        # Project and case study data
│       └── public/             # Static files (assets, profile picture, PDF)
├── packages/
│   ├── design-tokens/          # Visual token definitions & Tailwind preset
│   ├── ui/                     # Modular component library (Radix + cn)
│   └── content/                # Zod validation schemas and type exports
├── turbo.json                  # Turborepo task pipeline config
├── package.json                # Root workspace configuration
└── README.md                   # Documentation (this file)
```

## ✨ Features

- **Futuristic Dark Matter Theme**: Designed with `#030305` bg, HSL gradients, and electric blue/violet accent schemes.
- **Performance-Optimized Orbs**: CPU-friendly background lighting effects utilizing pure CSS gradients instead of JavaScript execution loops.
- **Custom Cursor & Progress Bar**: Interactive dot + outline tracking with page scroll progress line indicator.
- **Hero & Orbital Animations**: Greeting block with real-time text-typing effects, dynamic stat badges, and orbital planetary decorators around the profile photo.
- **Bento About Grid**: Clean responsive layout showing bio quote, availability status, education timelines, and project counts.
- **Technical Arsenal**: Grid categorizations showcasing Languages, Frontend, Backend, and Tooling skills.
- **Featured Works Grid**: Alternating layout design displaying full-bleed mockups, description pills, source repository redirects, and custom Case Study modals powered by Dialog overlays.
- **Working Contact Form**: Sleek contact input fields connected to `/api/contact` handling client/server validation via Zod schemas.
- **AI Streaming Assistant**: Embedded client chat interface communicating with `/api/chat` server-side edge runtime proxy that streams tokens from OpenAI (using `gpt-3.5-turbo` for free-tier compatibility), keeping API keys strictly private.

## 🛠️ Installation & Setup

1. **Verify Prerequisites**:
   Ensure you have Node.js version 20+ installed.

2. **Clone and Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file inside `apps/web/` (or copy `.env.example` at root into `.env`):
   ```env
   OPENAI_API_KEY=sk-your-openai-api-key # Required for Chatbot assistant
   ```

4. **Start Development Server**:
   Run the dev task to spin up the local Turborepo pipeline:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   Compile and optimize all monorepo packages for deployment:
   ```bash
   npm run build
   ```

## 🌐 Deployment (Vercel)

To deploy this project to Vercel:
1. Link your git repository to Vercel.
2. Select the **Root Directory** settings in Vercel as `apps/web`.
3. Vercel automatically detects Next.js inside the monorepo workspace. Set your environment variables (like `OPENAI_API_KEY`) in the Vercel dashboard.
4. Deploy!
