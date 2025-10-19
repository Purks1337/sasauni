import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get Started
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              This template is ready to use with modern technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">React 19</Badge>
                  Latest Features
                </CardTitle>
                <CardDescription>
                  Built with the latest React 19 features including React Compiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">Next.js 15</Badge>
                  App Router
                </CardTitle>
                <CardDescription>
                  Modern Next.js with App Router and server components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Explore</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">Tailwind v4</Badge>
                  Utility First
                </CardTitle>
                <CardDescription>
                  Latest Tailwind CSS v4 with zero configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Customize</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
