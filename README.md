# Sasauni Next.js Template

A modern, production-ready Next.js template built with React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **React 19** - Latest React features including React Compiler
- **Next.js 15** - App Router, Server Components, and all latest features
- **TypeScript** - Full TypeScript support with strict mode
- **Tailwind CSS v4** - Latest Tailwind with zero configuration
- **ESLint** - Pre-configured linting rules
- **Modern Tooling** - PostCSS, optimized build process

## 📦 Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [PostCSS](https://postcss.org/) - CSS processing

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sasauni-nextjs-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page sections
├── lib/                  # Utility functions
└── styles/               # Global styles
    └── globals.css       # Tailwind CSS imports
```

## 🎨 Styling

This template uses Tailwind CSS v4 with zero configuration. You can customize the design by:

1. Modifying the `src/styles/globals.css` file
2. Using Tailwind utility classes in your components
3. Creating custom utilities with the `@utility` directive

### Custom Utilities

The template includes some custom utility classes:

```css
@utility container {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

@utility btn {
  @apply inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50;
}
```

## 🧩 Components

### UI Components

- `Button` - Customizable button component with variants
- `Card` - Card container with header, content, and footer
- `Badge` - Small status or category labels

### Page Sections

- `Hero` - Landing page hero section
- `Features` - Features showcase section

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the application:

```bash
npm run build
```

The `out` folder will contain the static files ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [React](https://react.dev/) team for the powerful UI library
