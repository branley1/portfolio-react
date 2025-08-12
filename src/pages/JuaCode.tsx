import React, { useState } from 'react';
import JuaCodeEmbed from '../components/JuaCodeEmbed/JuaCodeEmbed';
import CustomNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './JuaCode.scss';
import ReactGA from 'react-ga4';
import Layout from '../components/Layouts/Layout';

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
      <div className="navbar-spacer" aria-hidden />
      <div className="juacode-top-actions">
        <button type="button" className="btn-gradient" onClick={reloadEmbed} aria-label="Reload JuaCode embed">
          <img src="/icon-64.png" alt="JuaCode logo" width={16} height={16} style={{ marginLeft: '4px' }} /> Refresh
        </button>
      </div>
      <Layout sidebarVariant="spotifyOnly">
        <div className="container">
          <div key={embedKey}>
            <JuaCodeEmbed />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default JuaCode;
