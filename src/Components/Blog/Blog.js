import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Post from '../Post/Post';
import AllPosts from '../AllPosts/AllPosts';

function Blog() {
    return (
        <div>
            <Navbar />
            <div>
                <Route path='/' exact component={AllPosts} />
                <Route path='/about/' component={About} />
                <Route path='/posts/:slug' exact component={Post} />
            </div>
            <Footer />
        </div>
    ) 
}

export default Blog;