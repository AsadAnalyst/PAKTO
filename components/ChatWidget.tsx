import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <a
      href="#contact"
      aria-label="Chat with us"
      title="Chat with us"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-xl shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={22} aria-hidden />
    </a>
  );
}