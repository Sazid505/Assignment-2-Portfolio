import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';  // <-- This should be the correct import path

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;
