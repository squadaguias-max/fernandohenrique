import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/template.config";

export function AppShell({ children }) {
  const whatsapp = whatsappUrl();
  return <div className="min-h-screen">
    <Header />
    <main id="conteudo">{children}</main>
    <Footer />
    {whatsapp && <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp com Fernando Henrique Marques"><MessageCircle size={24} strokeWidth={2} aria-hidden="true" /><span>WhatsApp</span></a>}
  </div>;
}
