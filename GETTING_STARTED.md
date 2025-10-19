# Getting Started

This guide will help you get up and running with the Sasauni Next.js template.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## What's Included

### 🎯 Core Technologies
- **Next.js 15** - Latest version with App Router
- **React 19** - Latest React with React Compiler
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Zero-configuration styling

### 🧩 Pre-built Components
- `Button` - Customizable button with variants
- `Card` - Card container with header/content/footer
- `Badge` - Status and category labels

### 📄 Pages
- `/` - Homepage with hero and features
- `/about` - About page with technology details

### 🎨 Styling
- Tailwind CSS v4 with zero configuration
- Custom utility classes using `@utility` directive
- Dark mode support
- Responsive design

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── about/          # About page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── sections/      # Page sections
├── lib/               # Utility functions
└── styles/            # Global styles
    └── globals.css    # Tailwind CSS imports
```

## Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Creating Components
1. Add components to `src/components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns

### Styling
1. Use Tailwind utility classes
2. Create custom utilities with `@utility` directive
3. Modify `src/styles/globals.css` for global styles

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Deploy the 'out' folder
```

## Need Help?

- Check the [Next.js documentation](https://nextjs.org/docs)
- Read the [React documentation](https://react.dev)
- Explore [Tailwind CSS docs](https://tailwindcss.com/docs)
- Review the [TypeScript handbook](https://www.typescriptlang.org/docs)

## Next Steps

1. Customize the design in `src/styles/globals.css`
2. Add your own components in `src/components/`
3. Create new pages in `src/app/`
4. Configure your deployment platform
5. Start building your amazing app! 🚀
