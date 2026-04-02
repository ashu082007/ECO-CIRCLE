import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ClipboardList, CheckCircle, Gift, ArrowRight } from "lucide-react";

/**
 * Home Page - Landing page for EcoCircle
 * Shows hero section, how it works, and call-to-action buttons
 */
const Index = () => {
  const steps = [
    { icon: Leaf, title: "Do Eco Activities", description: "Drive green, use EVs, or generate solar power" },
    { icon: ClipboardList, title: "Submit via Form", description: "Report your activity through a simple Google Form" },
    { icon: CheckCircle, title: "Get Approved", description: "Admin reviews and approves your submission" },
    { icon: Gift, title: "Earn & Redeem", description: "Earn points and redeem eco-friendly rewards" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-secondary text-primary rounded-full px-4 py-1.5 text-sm font-medium">
          <Leaf className="w-4 h-4" /> Sustainability Rewards
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Earn Rewards for<br />Going Green 🌍
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          EcoCircle rewards you for nature-positive activities like eco-driving, EV usage, and solar power generation. Simple points, real impact.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link to="/login">
            <Button size="lg">
              Get Started <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="lg">
              Explore Marketplace
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-foreground mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
        © 2026 EcoCircle · Built for Demo
      </footer>
    </div>
  );
};

export default Index;
