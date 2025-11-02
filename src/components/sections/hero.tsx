import { Button } from '@/shared/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Welcome to{' '}
            <span className="text-blue-600 dark:text-blue-400">Sasauni</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A modern Next.js template with React 19, TypeScript, and Tailwind CSS v4. 
            Built for developers who want to ship fast without compromising on quality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8" asChild>
              <a href="/about">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}
