import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameProvider } from './components/state/GameProvider';

render(
  <Router>
    <GameProvider>
      <App/>
    </GameProvider>
  </Router>,
  document.getElementById('root')
);
