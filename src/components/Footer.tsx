import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                Dra. Maissa Mansano
              </p>
              <p className="text-sm opacity-60 uppercase tracking-[0.15em]">
                Fisioterapeuta | CREFITO 13/438865-F
              </p>
            </div>

            <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.15em] opacity-60">
              <a href="#home" className="hover:opacity-100 transition-opacity">{t.nav.home}</a>
              <a href="#servicos" className="hover:opacity-100 transition-opacity">{t.nav.services}</a>
              <a href="#laserterapia" className="hover:opacity-100 transition-opacity">{t.nav.laser}</a>
              <a href="#sobre" className="hover:opacity-100 transition-opacity">{t.nav.about}</a>
              <a href="#duvidas" className="hover:opacity-100 transition-opacity">{t.nav.faq}</a>
              <a href="#contato" className="hover:opacity-100 transition-opacity">{t.nav.contact}</a>
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-background/10 flex items-center justify-center gap-1 text-xs opacity-50">
            <span>{t.footer.madeWith}</span>
            <Heart className="h-3 w-3 text-red-400 fill-red-400" />
            <span>{t.footer.in} {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
