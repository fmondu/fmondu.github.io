# Gi## Features

- ⚡ **React 18** with modern patterns
- 🔒 **TypeScript 5** with strict type checking
- 🚀 **Vite 5** for lightning-fast development
- 🎨 **Tailwind CSS 3** for responsive styling
- 📱 **Mobile-first** design
- 🌟 **GitHub Pages** deployment
- 🔥 **Hot Module Replacement**
- 📦 **Optimized builds**React TypeScript Vite Tailwind Portfolio

A modern, responsive portfolio website built with React 18, TypeScript, Vite 5 and Tailwind CSS 3, designed for deployment on GitHub Pages.

## Features

- ⚡ **React 18** with latest patterns and hooks
- 🔒 **TypeScript 5** with strict type checking
- 🚀 **Vite 5** for lightning-fast development and optimized builds
- 🎨 **Tailwind CSS 3** for modern, responsive styling
- 📱 **Mobile-first** responsive design
- � **ESLint 9** with TypeScript support for code quality
- 🌟 **GitHub Pages** ready deployment
- 🔥 **Hot Module Replacement** for instant development feedback
- � **Tree-shaking** and optimized production builds

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fmondu/fmondu.github.io.git
cd fmondu.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at [http://localhost:5173](http://localhost:5173).

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. To deploy:

1. Make sure your repository is named `username.github.io` (where `username` is your GitHub username)

2. Install the gh-pages package (already included in dependencies):
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your site will be available at `https://fmondu.github.io`

## Customization

### Updating Content

- Edit `src/App.js` to modify the main content
- Update the title and meta description in `public/index.html`
- Customize colors and styling by modifying Tailwind classes

### Adding New Components

Create new components in the `src/components/` directory and import them into `App.tsx`. All components should be properly typed with TypeScript for better development experience.

### TypeScript Configuration

The project uses strict TypeScript settings for better type safety. You can modify `tsconfig.json` to adjust TypeScript compiler options:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    // Add more options as needed
  }
}
```

### Tailwind Configuration

Modify `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
    },
  },
  plugins: [],
}
```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
fmondu.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18.3.1** - Latest React
- **TypeScript 5.5.4** - Type safety
- **Vite 5.4.5** - Build tool
- **Tailwind CSS 3.4.10** - Styling
- **GitHub Actions** - Deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).