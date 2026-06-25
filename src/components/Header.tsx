import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#laserterapia", label: t.nav.laser },
    { href: "#sobre", label: t.nav.about },
    { href: "#duvidas", label: t.nav.faq },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-sm border border-primary/15 bg-secondary shadow-sm ring-1 ring-background/70 transition-colors group-hover:bg-accent">
              <img src={logo} alt="Maissa Mansano Fisioterapia" className="h-8 md:h-9 w-auto mix-blend-multiply" />
            </span>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Maissa Mansano
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium hidden sm:block">
                Pélvica e Domiciliar
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm uppercase tracking-[0.1em] font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-6 after:h-0.5 after:bg-primary after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-border">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50" aria-label="Navegação principal mobile">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.15em] font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-2 hover:bg-accent/50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
