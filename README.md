# Initium

[🇰🇷 한국어](./README-ko.md)

Modern SaaS Landing Page Template - React + TypeScript + Vite

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?logo=three.js)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean design inspired by Linear, Vercel, and Notion
- 🧊 **3D Background** - Interactive background using Three.js + React Three Fiber
- 🎬 **Smooth Animations** - Scroll & hover animations powered by Framer Motion
- 🌐 **Multi-language Support** - Switch between English and Korean
- 📱 **Fully Responsive** - Mobile, tablet, and desktop support
- ⚡ **Fast Development** - Instant updates with Vite HMR

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |

## 📁 Project Structure

```
├── components/
│   ├── Sections/          # Page section components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features showcase
│   │   ├── Pricing.tsx    # Pricing plans
│   │   ├── FAQ.tsx        # Frequently asked questions
│   │   └── Footer.tsx     # Footer
│   ├── Three/             # 3D related components
│   │   └── BackgroundScene.tsx
│   └── UI/                # Reusable UI components
│       └── Button.tsx
├── contexts/
│   └── LanguageContext.tsx  # Multi-language support
├── public/
│   └── logo.svg           # Logo file
├── App.tsx                # Main app component
├── index.tsx              # Entry point
└── types.ts               # Type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (default: http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Customization

### Change Logo
Replace the `public/logo.svg` file with your own logo.

### Color Theme
Modify the `brand` colors in your Tailwind CSS configuration.

### Edit Text Content
All text content is managed in `contexts/LanguageContext.tsx` for both English and Korean.

## 📄 License

MIT License

---

Made with ❤️ using React + Vite
