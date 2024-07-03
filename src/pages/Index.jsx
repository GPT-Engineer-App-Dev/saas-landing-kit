import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="text-2xl font-bold">SaaS Logo</div>
        <nav className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Button variant="outline">Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-between py-16">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Welcome to Our SaaS</h1>
          <p className="text-lg text-muted-foreground">The best solution for your business needs.</p>
          <Button size="lg">Get Started</Button>
        </div>
        <img src="https://placehold.co/600x400" alt="placeholder" className="rounded-lg shadow-lg" />
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 1" className="mb-4" />
              <CardTitle>User One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This SaaS is amazing! It has transformed my business."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 2" className="mb-4" />
              <CardTitle>User Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I can't imagine working without this tool. It's a game-changer."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="User 3" className="mb-4" />
              <CardTitle>User Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Highly recommend this SaaS to anyone looking to improve their workflow."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-8 py-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">SaaS Logo</div>
          <div className="space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-x-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;