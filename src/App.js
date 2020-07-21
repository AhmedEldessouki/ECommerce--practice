import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  useEffect(() => {
    document.title = 'E-Commerce';
  });

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
