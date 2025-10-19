import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'React 19',
    description: 'Latest React features including React Compiler for automatic optimization.',
    icon: '⚛️',
  },
  {
    title: 'Next.js 15',
    description: 'App Router, Server Components, and all the latest Next.js features.',
    icon: '▲',
  },
  {
    title: 'TypeScript',
    description: 'Full TypeScript support with strict mode enabled for better development experience.',
    icon: '📘',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Latest Tailwind CSS with zero configuration and improved performance.',
    icon: '🎨',
  },
  {
    title: 'ESLint',
    description: 'Pre-configured ESLint rules for code quality and consistency.',
    icon: '🔍',
  },
  {
    title: 'Modern Tooling',
    description: 'Optimized build process with PostCSS and modern JavaScript features.',
    icon: '⚡',
  },
];

export function Features() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to build modern web apps
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This template comes pre-configured with all the essential tools and libraries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
