import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string[];
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  useEffect(() => {
    const fetchProjects = async () => {
      let query = supabase.from("projects").select("*").order("created_at", { ascending: false });
      
      if (filter === "featured") {
        query = query.eq("featured", true);
      }

      const { data, error } = await query;

      if (!error && data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [filter]);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Portfolio"
            title="My Projects"
            description="A comprehensive collection of projects showcasing my expertise in full-stack development, AI integration, and innovative solutions."
          />

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={`font-display tracking-wider ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "border-primary/50 text-primary hover:bg-primary/10"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className={`font-display tracking-wider ${
                filter === "featured"
                  ? "bg-primary text-primary-foreground"
                  : "border-primary/50 text-primary hover:bg-primary/10"
              }`}
            >
              Featured Only
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <GlowCard key={i} className="h-96 animate-pulse">
                      <div className="h-48 bg-muted/50 rounded-lg mb-4" />
                      <div className="h-4 bg-muted/50 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-muted/50 rounded w-1/2" />
                    </GlowCard>
                  ))
              : projects.map((project) => (
                  <GlowCard
                    key={project.id}
                    variant={project.featured ? "neon" : "default"}
                    className="group flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="h-48 rounded-lg bg-gradient-to-br from-primary/20 via-muted to-secondary/20 mb-6 flex items-center justify-center overflow-hidden relative">
                      <div className="text-8xl font-display text-primary/30 group-hover:scale-110 transition-transform duration-500">
                        {project.title.charAt(0)}
                      </div>
                      {project.featured && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground font-mono text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Project Info */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech_stack?.map((tech) => (
                        <TechBadge key={tech} variant="primary">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4 border-t border-border">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-mono text-sm transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </GlowCard>
                ))}
          </div>

          {projects.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="font-body text-xl text-muted-foreground">No projects found.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
