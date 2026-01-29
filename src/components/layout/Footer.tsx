import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:donatoalona.05@gmail.com", label: "Email" },
];

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider">
                <span className="text-primary">ALONA</span>
                <span className="text-foreground">.DEV</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-lg max-w-md leading-relaxed">
              Full-stack developer specializing in cutting-edge technologies and 
              building the future of web applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:neon-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li>donatoalona.05@gmail.com</li>
              <li>Mandaluyong City, Metro Manila</li>
              <li>Available for freelance/Contract</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">© {new Date().getFullYear()}</span> Alona Donato. All rights reserved.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Built with passion
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
