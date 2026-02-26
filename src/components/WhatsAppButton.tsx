import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5581994185453?text=Olá! Gostaria de saber mais sobre os moinhos Newtech."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
