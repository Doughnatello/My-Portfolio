import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2, Cpu, Database } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-primary">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-primary neon-text mt-2">Alona Donato</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="font-mono text-lg md:text-xl text-muted-foreground mb-8">
            <span className="text-primary">{">"}</span>
            <span> Full-Stack Developer & AI Enthusiast</span>
            <span className="text-primary cursor-blink"></span>
          </div>

          {/* Description */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building the future with cutting-edge technologies. 
            Specializing in <span className="text-primary">React</span>, <span className="text-secondary">Node.js</span>, 
            and <span className="text-neon-blue">AI/ML</span> solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="font-display text-lg tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 neon-glow group"
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-display text-lg tracking-wider border-primary/50 text-primary hover:bg-primary/10"
            >
              <Link to="https://drive.google.com/file/d/1w8HPbu44UkFbEz7--OMgvY5D4ta8_6uH/view?usp=sharing">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Link>
            </Button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">Frontend</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Cpu className="w-5 h-5 text-secondary" />
              <span className="font-mono text-sm">Backend</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Database className="w-5 h-5 text-neon-blue" />
              <span className="font-mono text-sm">Database</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
