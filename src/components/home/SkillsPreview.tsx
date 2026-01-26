import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
}

export const SkillsPreview = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("proficiency", { ascending: false })
        .limit(6);

      if (!error && data) {
        setSkills(data);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          label="Expertise"
          title="Technical Skills"
          description="Technologies I use to bring ideas to life with precision and innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="glass p-6 rounded-xl animate-pulse">
                    <div className="h-4 bg-muted/50 rounded w-1/2 mb-4" />
                    <div className="h-2 bg-muted/50 rounded w-full" />
                  </div>
                ))
            : skills.map((skill) => (
                <div
                  key={skill.id}
                  className="glass p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
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
                  <span className="font-mono text-xs text-muted-foreground mt-2 block">
                    {skill.category}
                  </span>
                </div>
              ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-display tracking-wider border-primary/50 text-primary hover:bg-primary/10 group"
          >
            <Link to="/skills">
              View All Skills
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
