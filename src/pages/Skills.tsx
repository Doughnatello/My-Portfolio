import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Code, Server, Database, Cloud, Brain, Container } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon: string | null;
}

const categoryIcons: Record<string, any> = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  Cloud: Cloud,
  "AI/ML": Brain,
  DevOps: Container,
  Languages: Code,
  API: Server,
};

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("proficiency", { ascending: false });

      if (!error && data) {
        setSkills(data);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Expertise"
            title="Technical Skills"
            description="A comprehensive overview of my technical proficiencies across various domains of software development."
          />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <GlowCard key={i} className="animate-pulse">
                    <div className="h-6 bg-muted/50 rounded w-1/3 mb-6" />
                    <div className="space-y-4">
                      {Array(3)
                        .fill(0)
                        .map((_, j) => (
                          <div key={j}>
                            <div className="h-4 bg-muted/50 rounded w-1/2 mb-2" />
                            <div className="h-2 bg-muted/50 rounded w-full" />
                          </div>
                        ))}
                    </div>
                  </GlowCard>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category] || Code;
                return (
                  <GlowCard key={category} variant="neon">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {category}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-5">
                      {categorySkills.map((skill) => (
                        <div key={skill.id}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-body text-foreground font-medium">
                              {skill.name}
                            </span>
                            <span className="font-mono text-sm text-primary">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full progress-glow transition-all duration-1000"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          )}

          {/* Additional Skills Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard className="text-center">
              <div className="text-5xl font-display font-bold text-primary neon-text mb-2">
                6+
              </div>
              <p className="font-body text-muted-foreground">Years of Experience</p>
            </GlowCard>
            <GlowCard className="text-center">
              <div className="text-5xl font-display font-bold text-secondary neon-text-magenta mb-2">
                50+
              </div>
              <p className="font-body text-muted-foreground">Projects Completed</p>
            </GlowCard>
            <GlowCard className="text-center">
              <div className="text-5xl font-display font-bold text-neon-blue mb-2">
                20+
              </div>
              <p className="font-body text-muted-foreground">Technologies Mastered</p>
            </GlowCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
