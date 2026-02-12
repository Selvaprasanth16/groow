import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-xl font-bold">
              <span className="gradient-text">Groow</span> More
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              We build scalable digital products that grow businesses. From idea
              to deployment — complete full stack solutions.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Github size={18} />
              </a>
              <a href="mailto:hello@groowmore.dev" className="text-muted-foreground transition-colors hover:text-primary">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">Contact</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>hello@groowmore.dev</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Groow More. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
