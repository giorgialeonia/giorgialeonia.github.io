import React from 'react';
import './App.css';

import Homepage from './pages/homepage';
import Links from './pages/links';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div className="App">
      <div className="App-page">
        <header>
          <Homepage />
        </header>
        <Links />
      </div>
    </div>
  );
}

export default App;
