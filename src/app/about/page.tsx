import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About This Template
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Learn more about the technologies and features included in this Next.js template.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">React 19</Badge>
                Latest Features
              </CardTitle>
              <CardDescription>
                Built with the latest React 19 features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• React Compiler for automatic optimization</li>
                <li>• Improved hydration and performance</li>
                <li>• New hooks and concurrent features</li>
                <li>• Better TypeScript integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Next.js 15</Badge>
                App Router
              </CardTitle>
              <CardDescription>
                Modern Next.js with App Router
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• App Router for better performance</li>
                <li>• Server Components by default</li>
                <li>• Improved caching strategies</li>
                <li>• Better SEO and metadata handling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">Tailwind CSS v4</Badge>
                Zero Configuration
              </CardTitle>
              <CardDescription>
                Latest Tailwind CSS with zero configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Zero configuration setup</li>
                <li>• Improved performance</li>
                <li>• New @utility directive</li>
                <li>• Better CSS-in-JS integration</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
