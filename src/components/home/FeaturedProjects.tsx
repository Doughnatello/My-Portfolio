import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string[];
  live_url: string | null;
  github_url: string | null;
}

export const FeaturedProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("featured", true)
        .limit(3);

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A selection of my most impactful work, showcasing innovation in web development and AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <GlowCard key={i} className="h-80 animate-pulse">
                    <div className="h-40 bg-muted/50 rounded-lg mb-4" />
                    <div className="h-4 bg-muted/50 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted/50 rounded w-1/2" />
                  </GlowCard>
                ))
            : projects.map((project) => (
                <GlowCard key={project.id} variant="neon" className="group">
                  {/* Project Image Placeholder */}
                  <div className="h-40 rounded-lg bg-gradient-to-br from-primary/20 via-muted to-secondary/20 mb-6 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl font-display text-primary/30 group-hover:scale-110 transition-transform duration-500">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack?.slice(0, 3).map((tech) => (
                      <TechBadge key={tech} variant="primary">
                        {tech}
                      </TechBadge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </GlowCard>
              ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-display tracking-wider border-primary/50 text-primary hover:bg-primary/10 group"
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
