import React, { useState } from 'react';
import JuaCodeEmbed from '../components/JuaCodeEmbed/JuaCodeEmbed';
import CustomNavbar from '../components/Navbar/Navbar';
import './JuaCode.scss';
import { trackEvent } from '../utils/analytics';

const JuaCode: React.FC = () => {
  const [embedKey, setEmbedKey] = useState<number>(0);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [lastZoomAction, setLastZoomAction] = useState<'in' | 'out' | null>(null);
  const [zoomHint, setZoomHint] = useState<string>("100%");
  const [showZoomHint, setShowZoomHint] = useState<boolean>(false);
  const zoomHintTimer = React.useRef<number | null>(null);

  const revealZoomHint = (scale: number) => {
    const pct = Math.round(scale * 100);
    setZoomHint(`${pct}%`);
    setShowZoomHint(true);
    if (zoomHintTimer.current) {
      window.clearTimeout(zoomHintTimer.current);
    }
    zoomHintTimer.current = window.setTimeout(() => setShowZoomHint(false), 1400);
  };

  const handleZoomOut = () => {
    setZoomScale((z) => {
      const next = Math.max(0.75, Math.round((z - 0.05) * 100) / 100);
      if (next !== z) setLastZoomAction('out');
      if (next !== z) revealZoomHint(next);
      return next;
    });
  };
  const handleZoomIn = () => {
    setZoomScale((z) => {
      const next = Math.min(1.1, Math.round((z + 0.05) * 100) / 100);
      if (next !== z) setLastZoomAction('in');
      if (next !== z) revealZoomHint(next);
      return next;
    });
  };

  const reloadEmbed = () => {
    setEmbedKey((k) => k + 1);
    trackEvent({
      category: 'JuaCode',
      action: 'JuaCode Iframe Reloaded',
      label: 'Manual Refresh',
    });
  };

  return (
    <div className="juacode-page">
      <CustomNavbar />
      <div className="juacode-fullscreen-container" style={{ ['--juacode-zoom' as any]: zoomScale }}>
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
          Refresh
        </button>
        <div className="juacode-zoom-split" role="group" aria-label="Zoom controls">
          <div className="zoom-item">
            <button
              type="button"
              className={`btn-gradient juacode-zoom-btn juacode-zoom-out ${lastZoomAction === 'out' ? 'active' : ''}`}
              onClick={handleZoomOut}
              aria-label="Zoom out"
              title="Zoom out"
              disabled={zoomScale <= 0.75}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
            {(showZoomHint && lastZoomAction === 'out') && (
              <span className="zoom-value" aria-hidden>{zoomHint}</span>
            )}
          </div>
          <div className="zoom-item">
            <button
              type="button"
              className={`btn-gradient juacode-zoom-btn juacode-zoom-in ${lastZoomAction === 'in' ? 'active' : ''}`}
              onClick={handleZoomIn}
              aria-label="Zoom in"
              title="Zoom in"
              disabled={zoomScale >= 1.1}
            >
              <i className="fa fa-plus" aria-hidden="true" />
            </button>
            {(showZoomHint && lastZoomAction === 'in') && (
              <span className="zoom-value" aria-hidden>{zoomHint}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuaCode;
