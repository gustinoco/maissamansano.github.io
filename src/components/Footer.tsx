import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Dra. Maissa Mansano</p>
            <p className="text-sm opacity-80">Fisioterapeuta | CREFITO-X: XXXXX-F</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
            <a href="#servicos" className="hover:opacity-100 transition-opacity">Serviços</a>
            <a href="#sobre" className="hover:opacity-100 transition-opacity">Sobre</a>
            <a href="#duvidas" className="hover:opacity-100 transition-opacity">Dúvidas</a>
            <a href="#contato" className="hover:opacity-100 transition-opacity">Contato</a>
          </nav>

          <div className="text-center md:text-right text-sm opacity-80">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart className="h-4 w-4 text-red-400 fill-red-400" /> em {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
