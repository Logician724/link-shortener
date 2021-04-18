import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LinkViewer from './LinkViewer';
import LinkSubmitter from './LinkSubmitter';

function App() {
  const [type, setType] = useState('none');
  const [linkMessage, setLinkMessage] = useState('');
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LinkViewer type={type} linkMessage={linkMessage} />
        <LinkSubmitter setType={setType} setLinkMessage={setLinkMessage} />
      </header>
    </div>
  );
}

export default App;
