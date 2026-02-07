import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Dra. Maissa Mansano</p>
            <p className="text-sm opacity-80">Fisioterapeuta | CREFITO 13/438865-F</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <a href="#home" className="hover:opacity-100 transition-opacity">{t.nav.home}</a>
            <a href="#servicos" className="hover:opacity-100 transition-opacity">{t.nav.services}</a>
            <a href="#sobre" className="hover:opacity-100 transition-opacity">{t.nav.about}</a>
            <a href="#duvidas" className="hover:opacity-100 transition-opacity">{t.nav.faq}</a>
            <a href="#contato" className="hover:opacity-100 transition-opacity">{t.nav.contact}</a>
          </nav>

          <div className="text-center md:text-right text-sm opacity-80">
            <p className="flex items-center justify-center md:justify-end gap-1">
              {t.footer.madeWith} <Heart className="h-4 w-4 text-red-400 fill-red-400" /> {t.footer.in} {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
