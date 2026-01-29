import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { Award, Briefcase, GraduationCap, Heart, MapPin, Zap } from "lucide-react";

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Dr. Ruby Lanting Casaul Eductional Foundation Inc.",
    year: "2024",
  },
];

const interests = [
  "Artificial Intelligence",
  "Web Development",
  "Open Source",
  "Web Design",
  "Photo Editing",
  "UI/UX",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary/20 flex items-center justify-center">
                  <span className="text-[200px] font-display text-primary/30">A</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass p-4 rounded-xl neon-glow">
                <span className="font-display text-2xl font-bold text-primary">0</span>
                <span className="block font-mono text-xs text-muted-foreground">Years Exp</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl neon-glow-magenta">
                <span className="font-display text-2xl font-bold text-secondary"></span>
                <span className="block font-mono text-xs text-muted-foreground">Projects</span>
              </div>
            </div>

            {/* Content */}
            <div className="stagger-children">
              <span className="inline-block font-mono text-sm text-primary uppercase tracking-widest mb-4">
                <span className="text-muted-foreground">{"// "}</span>
                About Me
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Crafting Digital</span>
                <br />
                <span className="text-primary neon-text">Experiences</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-6">
                I'm Alona Donato, a passionate full-stack developer based in Mandaluyong City. Metro Manila, Philippines. 
                With 4 years of experience in building cutting-edge web applications in college era, 
                I specialize in creating seamless user experiences powered by modern technologies.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                My journey in tech began with a fascination for how software can transform ideas 
                into reality. Today, I focus on AI-integrated solutions, scalable architectures, 
                and innovative user interfaces that push the boundaries of what's possible.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body">Mandaluyong City. Metro Manila, Philippines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Education & Interests */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <SectionHeader
                label="Education"
                title="Academic Background"
                align="left"
              />
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <GlowCard key={index} variant="neon" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="font-body text-muted-foreground">{edu.school}</p>
                      <span className="font-mono text-sm text-primary">{edu.year}</span>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <SectionHeader
                label="Passions"
                title="What Drives Me"
                align="left"
              />
              <GlowCard variant="gradient">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-5 h-5 text-secondary" />
                  <span className="font-display text-lg font-semibold">Tech Interests</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <TechBadge key={interest} variant="secondary">
                      {interest}
                    </TechBadge>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-display text-lg font-semibold">Fun Facts</span>
                  </div>
                  <ul className="space-y-2 font-body text-muted-foreground">
                    <li>• Can play a recorder flute</li>
                    <li>• I Can See the Unseen</li>
                    <li>• I’m a "Polyglot" by Nature</li>
                    <li>• Coffee enthusiast ☕</li>
                    <li>• I Have a Creative Side</li>
                  </ul>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
