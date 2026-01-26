import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { Award, Briefcase, GraduationCap, Heart, MapPin, Zap } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Innovation",
    period: "2022 - Present",
    description: "Leading development of AI-powered enterprise applications using React and Node.js.",
  },
  {
    title: "Full-Stack Developer",
    company: "StartupX Labs",
    period: "2020 - 2022",
    description: "Built scalable microservices and real-time collaboration tools for remote teams.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2018 - 2020",
    description: "Crafted responsive web applications and interactive user experiences.",
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    year: "2018",
  },
  {
    degree: "B.S. Software Engineering",
    school: "MIT",
    year: "2016",
  },
];

const interests = [
  "Artificial Intelligence",
  "Blockchain Technology",
  "Open Source",
  "Quantum Computing",
  "Cybersecurity",
  "Space Tech",
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
                <span className="font-display text-2xl font-bold text-primary">6+</span>
                <span className="block font-mono text-xs text-muted-foreground">Years Exp</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl neon-glow-magenta">
                <span className="font-display text-2xl font-bold text-secondary">50+</span>
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
                I'm Alona Donato, a passionate full-stack developer based in San Francisco. 
                With over 6 years of experience in building cutting-edge web applications, 
                I specialize in creating seamless user experiences powered by modern technologies.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                My journey in tech began with a fascination for how software can transform ideas 
                into reality. Today, I focus on AI-integrated solutions, scalable architectures, 
                and innovative user interfaces that push the boundaries of what's possible.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body">San Francisco, California</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Career"
            title="Work Experience"
            align="left"
          />

          <div className="space-y-8 max-w-3xl">
            {experiences.map((exp, index) => (
              <GlowCard key={index} className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary" />
                </div>
                <span className="font-mono text-sm text-primary">{exp.period}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2">
                  {exp.title}
                </h3>
                <p className="font-body text-secondary text-lg">{exp.company}</p>
                <p className="font-body text-muted-foreground mt-2">{exp.description}</p>
              </GlowCard>
            ))}
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
                    <li>• Open source contributor with 1000+ GitHub stars</li>
                    <li>• Speaker at tech conferences worldwide</li>
                    <li>• Mentor for aspiring developers</li>
                    <li>• Coffee enthusiast ☕</li>
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
