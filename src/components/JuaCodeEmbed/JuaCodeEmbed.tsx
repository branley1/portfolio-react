import React from 'react';
import ReactGA from 'react-ga4';
import './_juacode-embed.scss';

const JuaCodeEmbed: React.FC = () => {
  const juacodeUrl =
    (import.meta as any).env?.VITE_JUACODE_URL ||
    (import.meta.env.MODE === 'development'
      ? 'http://localhost:3000'
      : 'https://juacode.netlify.app');

  const handleIframeLoad = () => {
    ReactGA.event({
      category: 'JuaCode',
      action: 'JuaCode Iframe Loaded',
      label: 'Iframe Load Complete',
    });
  };

  return (
    <div className="juacode-embed-container fullpage">
      <div className="juacode-iframe-wrapper">
        <iframe
          src={juacodeUrl}
          title="JuaCode AI Coding Assistant"
          className="juacode-iframe"
          onLoad={handleIframeLoad}
          allow="camera; microphone; clipboard-read; clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
};

export default JuaCodeEmbed;
