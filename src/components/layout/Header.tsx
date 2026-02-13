import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/kits", label: "Kits" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SenseI — Build it. Try it. Learn it!" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                isActive(link.to)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow">
            <Link to="/waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-0.5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.to) ? "text-primary bg-accent font-semibold" : "text-muted-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 shadow-md shadow-primary/20">
              <Link to="/waitlist" onClick={() => setMobileOpen(false)}>Join Waitlist</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
