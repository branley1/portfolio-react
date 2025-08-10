import React from "react";

interface ChatbotEmbedProps {
  src?: string;
  title?: string;
  height?: number | string;
}

const ChatbotEmbed: React.FC<ChatbotEmbedProps> = ({
  src,
  title = "Chatbot",
  height = 520,
}) => {
  const envSrc = import.meta.env.VITE_CHATBOT_URL as string | "https://juacode.netlify.app/chat";
  const iframeSrc = src ?? envSrc;

  if (!iframeSrc) return null;

  return (
    <div className="chatbot-embed" role="region" aria-label={title}>
      <iframe
        src={iframeSrc}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        allow="microphone; clipboard-read; clipboard-write;"
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-downloads"
        style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height, border: 0, borderRadius: 12 }}
      />
    </div>
  );
};

export default ChatbotEmbed;
