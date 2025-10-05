# 🚀 Personal AI Portfolio

A modern, interactive portfolio website featuring an AI-powered assistant that introduces visitors to my professional background, projects, and technical expertise. Built with cutting-edge technologies and designed for an engaging user experience.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Framer Motion** - Advanced animations and transitions
- **next-intl** - Internationalization (i18n)
- **Zustand** - Lightweight state management

### Backend
- **Fastify** - Fast and efficient web framework
- **OpenAI API** - AI chat integration
- **TypeScript** - Type-safe server development
- **Zod** - Runtime type validation

### Development
- **Turbo** - Monorepo build system
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 🏗️ Project Structure

```
personal-ai-portfolio/
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/         # App Router pages
│   │   │   ├── components/  # Reusable UI components
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   ├── lib/         # Utility functions
│   │   │   └── types/       # TypeScript type definitions
│   │   ├── public/
│   │   │   └── data/        # JSON data files
│   │   └── messages/        # i18n translation files
│   └── api/                 # Fastify backend API
│       └── src/
│           ├── server.ts    # Main server file
│           ├── openai.ts    # AI integration
│           └── resend.ts    # Email service
├── config/                  # Shared configuration
│   ├── eslint-config/       # ESLint rules
│   └── typescript-config/   # TypeScript configs
└── package.json            # Monorepo configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key
- Resend API key (for contact form)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/marcus-santos/personal-ai-portfolio.git
cd personal-ai-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create `.env` file in `apps/api` directory:

**apps/api/.env**
```env
OPENAI_API_KEY=your_openai_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

**apps/web/.env.local**
```env
NEXT_PUBLIC_API_URL=http://localhost:3333
```

4. **Start development servers**
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3333

## 🌟 Key Highlights

### AI Assistant
- Context-aware responses about my professional background
- Multilingual support (English/Portuguese)
- Real-time chat interface with typing indicators

### Dynamic Content
- Projects, experiences, and education loaded from JSON
- Automatic localization based on user language
- Responsive card layouts with smooth animations

### Modern Architecture
- Monorepo structure with Turbo for efficient builds
- Type-safe API communication
- Component-driven development with shadcn/ui

### Performance Optimized
- Server-side rendering with Next.js
- Optimized images and lazy loading
- Efficient state management with Zustand

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start all development servers
npm run build        # Build all applications
npm run start        # Start production servers

# Individual apps
npm run dev:web      # Start only frontend
npm run dev:api      # Start only backend

# Linting & Formatting
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 📧 Contact

- **Email**: [marcus.santos.dev@gmail.com](mailto:marcus.santos.dev@gmail.com)
- **LinkedIn**: [Marcus Santos](https://linkedin.com/in/marcus-santos-dev)
- **GitHub**: [@marcus-santos](https://github.com/marcus-santos)

Built with ❤️ by [Marcus Santos](https://github.com/marcus-santos)

