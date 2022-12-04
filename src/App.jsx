import React from 'react';
import './sass/style.scss';
import { Navigation, Footer } from './components';

function App() {
  return (
    <>
      <div className="wrapper">
          <Navigation />
      </div>
      <Footer />
    </>
  );
}

export default App;
