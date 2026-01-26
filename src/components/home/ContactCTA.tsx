import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow">
            <MessageSquare className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Let's Build Something</span>
            <br />
            <span className="text-primary neon-text">Amazing Together</span>
          </h2>

          {/* Description */}
          <p className="font-body text-xl text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind? I'm always excited to collaborate on innovative ideas 
            and bring creative visions to life through technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-display text-lg tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 neon-glow group"
            >
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-display text-lg tracking-wider border-primary/50 text-primary hover:bg-primary/10"
            >
              <a href="mailto:alona.donato@email.com">
                <Mail className="mr-2 w-5 h-5" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
