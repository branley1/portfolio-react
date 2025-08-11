import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Highlights.scss";

// Content is now sourced from public/content/highlights.md (markdown-only)
// No raw HTML injection; safer and more maintainable.

const Highlights: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch("/content/highlights.md", { cache: "no-store" });
        const text = await res.text();
        if (!cancelled) setContent(text);
      } catch {
        if (!cancelled) setContent("# Highlights\n\nFailed to load content.");
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="highlights-page">
      <Navbar />
      <div className="navbar-spacer" aria-hidden />
      <main className="highlights-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </main>
      <Footer />
    </div>
  );
};

export default Highlights;
