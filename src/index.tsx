import React from 'react';
import ReactDOM from 'react-dom';
import WebSocketClient from './WebSocketClient'

ReactDOM.render(
  <React.StrictMode>
    <WebSocketClient/>
  </React.StrictMode>,
  document.getElementById('levelsystem')
);
