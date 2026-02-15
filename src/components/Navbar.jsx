import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/", sectionId: "home" },
  { label: "Team", path: "/team", sectionId: "team" },
  { label: "Projects", path: "/projects", sectionId: "projects" },
  { label: "Contact", path: "/contact", sectionId: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  const desktopLinks = useMemo(() => navLinks, []);

  useEffect(() => {
    if (!isHome) return;

    const ids = navLinks.map((l) => l.sectionId).filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-64px 0px -55% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavToSection = (sectionId) => (e) => {
    e.preventDefault();
    setOpen(false);

    if (isHome) {
      scrollToSection(sectionId);
      return;
    }

    navigate("/", { state: { scrollTo: sectionId } });
  };

  const isActive = (link) => {
    if (isHome) return activeSection === link.sectionId;
    return location.pathname === link.path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="gradient-text">Groow</span>{" "}
          <span className="text-foreground">More</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {desktopLinks.map((link) => (
            <a
              key={link.path}
              href="#"
              onClick={handleNavToSection(link.sectionId)}
              className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                isActive(link) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="#"
            onClick={handleNavToSection("contact")}
            className="gradient-bg rounded-lg px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href="#"
                onClick={handleNavToSection(link.sectionId)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive(link) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="#"
              onClick={handleNavToSection("contact")}
              className="gradient-bg rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
