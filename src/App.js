import React from 'react';
import Blog from './Components/Blog/Blog';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
}



export default App;
