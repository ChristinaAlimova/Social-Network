import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='container'>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
