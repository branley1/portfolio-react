import React from 'react';
import JuaCodeEmbed from '../components/JuaCodeEmbed/JuaCodeEmbed';
import './JuaCode.scss';

const JuaCode: React.FC = () => {
  return (
    <div className="juacode-page">
      <div className="container">
        <JuaCodeEmbed />
      </div>
    </div>
  );
};

export default JuaCode;
