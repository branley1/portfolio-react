import React, { useState } from 'react';
import JuaCodeEmbed from '../components/JuaCodeEmbed/JuaCodeEmbed';
import CustomNavbar from '../components/Navbar/Navbar';
import './JuaCode.scss';
import ReactGA from 'react-ga4';

const JuaCode: React.FC = () => {
  const [embedKey, setEmbedKey] = useState<number>(0);

  const reloadEmbed = () => {
    setEmbedKey((k) => k + 1);
    ReactGA.event({
      category: 'JuaCode',
      action: 'JuaCode Iframe Reloaded',
      label: 'Manual Refresh',
    });
  };

  return (
    <div className="juacode-page">
      <CustomNavbar />
      <div className="juacode-fullscreen-container">
        <div key={embedKey}>
          <JuaCodeEmbed />
        </div>
        <button 
          type="button" 
          className="btn-gradient juacode-refresh-button" 
          onClick={reloadEmbed} 
          aria-label="Reload JuaCode embed"
          title="Refresh JuaCode"
        >
          <img src="/icon-64.png" alt="JuaCode logo" width={16} height={16} />Refresh
        </button>
      </div>
    </div>
  );
};

export default JuaCode;
