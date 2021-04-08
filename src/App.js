import React from 'react';
import Footer from './Components/Footer/Footer';
import Post from './Components/Post/Post';
import AllPosts from './Components/AllPosts/AllPosts';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AllPosts />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
